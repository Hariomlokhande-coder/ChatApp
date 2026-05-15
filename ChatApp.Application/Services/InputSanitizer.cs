using System;
using System.Text.RegularExpressions;

namespace ChatApp.Application.Services
{
    /// <summary>
    /// Service for sanitizing user input to prevent XSS attacks
    /// </summary>
    public interface IInputSanitizer
    {
        string SanitizeHtml(string input);
        string SanitizeText(string input);
    }

    public class InputSanitizer : IInputSanitizer
    {
        // Dangerous HTML tags that should be completely removed
        private static readonly string[] DangerousTags = new[]
        {
            "script", "iframe", "object", "embed", "style", "link", "meta",
            "base", "form", "input", "button", "textarea", "select", "option"
        };

        // Safe HTML tags that can be preserved (with attributes filtered)
        private static readonly string[] SafeTags = new[]
        {
            "br", "p", "div", "span", "b", "i", "u", "strong", "em",
            "a", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6"
        };

        // Dangerous attributes that can execute scripts
        private static readonly string[] DangerousAttributes = new[]
        {
            "onclick", "onerror", "onload", "onmouseover", "onmouseout", "onkeydown",
            "onkeyup", "onchange", "onfocus", "onblur", "ondblclick", "oncontextmenu"
        };

        /// <summary>
        /// Sanitizes HTML input by removing dangerous tags and attributes
        /// </summary>
        public string SanitizeHtml(string input)
        {
            if (string.IsNullOrEmpty(input))
                return input;

            var output = input;

            // Remove script tags and their content
            output = RemoveScriptTags(output);

            // Remove dangerous HTML tags
            foreach (var tag in DangerousTags)
            {
                output = RemoveTag(output, tag);
            }

            // Remove dangerous attributes from remaining tags
            output = RemoveDangerousAttributes(output);

            // Remove javascript: protocol from links
            output = Regex.Replace(output, @"javascript:", "", RegexOptions.IgnoreCase);

            // Remove vbscript: protocol from links
            output = Regex.Replace(output, @"vbscript:", "", RegexOptions.IgnoreCase);

            // Remove data: protocol (can be used for XSS)
            output = Regex.Replace(output, @"data:text/html", "", RegexOptions.IgnoreCase);

            return output.Trim();
        }

        /// <summary>
        /// Sanitizes plain text input (no HTML allowed)
        /// </summary>
        public string SanitizeText(string input)
        {
            if (string.IsNullOrEmpty(input))
                return input;

            // Remove all HTML tags
            var output = Regex.Replace(input, @"<[^>]*>", "");

            // Remove scripts
            output = RemoveScriptTags(output);

            // HTML encode remaining content
            output = System.Web.HttpUtility.HtmlEncode(output);

            return output.Trim();
        }

        private string RemoveScriptTags(string input)
        {
            // Remove <script>...</script> tags and their content
            return Regex.Replace(input, @"<script[^>]*>.*?</script>", "", RegexOptions.IgnoreCase | RegexOptions.Singleline);
        }

        private string RemoveTag(string input, string tag)
        {
            // Remove opening tags
            input = Regex.Replace(input, $@"<{tag}[^>]*>", "", RegexOptions.IgnoreCase);

            // Remove closing tags
            input = Regex.Replace(input, $@"</{tag}>", "", RegexOptions.IgnoreCase);

            return input;
        }

        private string RemoveDangerousAttributes(string input)
        {
            foreach (var attr in DangerousAttributes)
            {
                // Remove dangerous attributes from all tags
                input = Regex.Replace(input, $@"\b{attr}\s*=\s*['""]?[^'"">\s]*['""]?", "", RegexOptions.IgnoreCase);
            }

            return input;
        }
    }
}
