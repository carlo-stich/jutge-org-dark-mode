// Add custom text to the landing page
try {
  const titleElement = document.querySelector('[style="font-size: 500%; font-weight: 100;"]');
  
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Now with dark mode!';
  subtitle.className = 'jdm-subtitle';
  
  titleElement.parentNode.insertBefore(subtitle, titleElement.nextSibling);
} catch (error) {
  // Not on landing page, do nothing
}

// Replace the logo with a transparent image
// For some reason it is not fully transparent, but it is better than the original one
try {
  const logoElement = document.querySelector('img[src="/ico/logos/fib.png"]');
  logoElement.src = 'https://dse.upc.edu/ca/logosfooter-ca/fib/@@images/image';
} catch (error) {
  // Logo not found, do nothing
}


// Highlight code blocks on all pages

const codeBlocks = document.querySelectorAll('code');

codeBlocks.forEach((block) => {
  block.classList.add('cpp');
});

hljs.highlightAll();