const STYLE_ID = 'logviewer-custom-style';

// Define the CSS overrides for each component
const cssContents: { [key: string]: string } = {
	// discord-message component
	'discord-message': `
:host {
  color: var(--text-normal) !important;
}

:host([highlight]) {
  background-color: var(--background-mentioned) !important;
}

:host([highlight])::before {
  background-color: var(--info-warning-foreground) !important;
}

:host([ephemeral]) {
  background-color: var(--brand-05a) !important;
}

:host([ephemeral]:hover) {
  background-color: var(--brand-10a) !important;
}

:host([ephemeral])::before {
  background-color: var(--brand-500) !important;
}

.discord-message-timestamp {
  color: var(--text-muted) !important;
}

.discord-message-edited {
  color: var(--text-muted) !important;
}

:host(:hover) {
  background-color: var(--background-message-hover) !important;
}

:host([highlight]:hover) {
  background-color: var(--background-mentioned-hover) !important;
}

.discord-message-ephemeral {
  color: var(--text-muted) !important;
}

.discord-message-ephemeral .discord-message-ephemeral-link {
  color: var(--text-link) !important;
}`,
	// discord-author-info component
	'discord-author-info': `
:host .discord-author-username  {
  color: var(--header-primary) !important;
}

:host .discord-application-tag {
  background-color: var(--bg-brand) !important;
  color: var(--white) !important;
}

:host .discord-application-tag.discord-application-tag-op {
  color: var(--brand-560) !important;
  background-color: var(--brand-260) !important;
}`,
	// discord-code component
	'discord-code': `
:host {
  background-color: var(--background-secondary) !important;
}

:host([multiline]) code {
  background-color: var(--background-secondary) !important;
  border: 1px solid var(--background-tertiary) !important;
}

/* verify colors, unsure */
:host([embed]) code {
  background-color: var(--background-secondary) !important;
}

:host([embed][multiline]) code {
  background: var(--background-secondary) !important;
}`,
	// TODO: discord-invite component
	'discord-invite': ``,
	// TODO: discord-attachment component
	'discord-attachment': ``,
	// TODO: discord-image-attachment component
	'discord-image-attachment': ``,
	// discord-link component
	'discord-link': `
a {
  color: var(--text-link) !important;
}`,
	// discord-mention component
	'discord-mention': `
:host {
  color: var(--mention-foreground) !important;
  background-color: var(--mention-background) !important;
}

:host([type='role']) {
  background-color: var(--mention-background) !important;
}

:host(:hover) {
  color: var(--white-500) !important;
  background-color: var(--brand-500) !important;
}`,
	// discord-quote component
	'discord-quote': `
.discord-quote-divider {
  background-color: var(--interactive-muted) !important;
}`,
	// TODO: discord-reaction component
	'discord-reaction': ``,
	// discord-spoiler component
	'discord-spoiler': `
:root {
  --__spoiler-background-color--hidden: var(--primary-300);
  --__spoiler-background-color--hidden--hover: hsl(var(--primary-300-hsl) / 0.8);
  --__spoiler-background-color--revealed: hsl(var(--black-500-hsl) / 0.1);
  --__spoiler-text-color--hidden: transparent;
  --__spoiler-warning-text-color: var(--primary-200);
  --__spoiler-warning-text-color--hover: var(--white-500);
  --__spoiler-warning-background-color: hsl(var(--black-500-hsl) / 0.6);
  --__spoiler-warning-background-color--hover: hsl(var(--black-500-hsl) / 0.9);
  --__spoiler-container-box-shadow-color: hsl(var(--black-500-hsl) / 0.1);
}

:root.dark {
  --__spoiler-background-color--hidden: var(--primary-700);
  --__spoiler-background-color--hidden--hover: hsl(var(--primary-700-hsl) / 0.8);
  --__spoiler-background-color--revealed: hsl(var(--white-500-hsl) / 0.1);
  --__spoiler-text-color--hidden: transparent;
  --__spoiler-warning-text-color: var(--primary-200);
  --__spoiler-warning-text-color--hover: var(--white-500);
  --__spoiler-warning-background-color: hsl(var(--black-500-hsl) / 0.6);
  --__spoiler-warning-background-color--hover: hsl(var(--black-500-hsl) / 0.9);
  --__spoiler-container-box-shadow-color: hsl(var(--black-500-hsl) / 0.1);
}

:host {
  color: var(--__spoiler-text-color--hidden) !important;
  background-color: var(--__spoiler-background-color--hidden) !important;
}

:host(:hover) {
  background-color: var(--__spoiler-background-color--hidden--hover) !important;
}

:host([activated]) {
  color: inherit !important;
  background-color: var(--__spoiler-background-color--revealed) !important;
}`,
	// TODO: discord-subscript component, what is this?
	'discord-subscript': ``,
	// TODO: discord-system-message component
	'discord-system-message': ``,
	// TODO: discord-tenor-video component
	'discord-tenor-video': ``,
	// discord-time component
	'discord-time': `
:host {
  background-color: var(--background-modifier-accent) !important;
}`,
	// TODO: discord-video-attachment component
	'discord-video-attachment': ``
};

/**
 * Recursively apply the custom styles to all shadow roots in the document.
 * @param {Element | ShadowRoot} element - The element to start applying styles from.
 */
export async function applyStylesToAllShadowRoots(element: Element | ShadowRoot): Promise<void> {
	// Check if the element is a shadow root
	if (element instanceof ShadowRoot) {
		if (element.childNodes.length === 0) {
			// Wait for the element to have children (some components are lazy-loaded)
			let retries = 100; // Retry 100 times (max 400ms)
			do {
				await new Promise((r) => setTimeout(r, 4)); // Wait 4ms (minimum delay for HTML5)
			} while (element.childNodes.length === 0 && retries-- > 0);
		}
		// Apply the style if it's not already applied
		if (
			element.host.nodeName.toLowerCase() in cssContents &&
			!element.querySelector(`style#${STYLE_ID}`)
		) {
			const style = document.createElement('style');
			style.textContent = cssContents[element.host.nodeName.toLowerCase()];
			style.id = STYLE_ID;
			element.appendChild(style);
		}
	}

	// Recursively apply styles to all shadow roots
	element.childNodes.forEach((child) => {
		if (child instanceof Element) {
			// Apply to both the shadow root and the element itself
			if (child.shadowRoot) {
				applyStylesToAllShadowRoots(child.shadowRoot);
			}
			applyStylesToAllShadowRoots(child);
		}
	});
}
