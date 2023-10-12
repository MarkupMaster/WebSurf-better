// Generate a unique token for this session
const sessionToken = generateToken();

// Function to generate a random session token
function generateToken() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const tokenLength = 32;
  let token = '';
  for (let i = 0; i < tokenLength; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
}

// Function to compare the obfuscated domain with session token
function checkAccess() {
  // Generate the obfuscated domain
  const obfuscatedDomain = generateObfuscatedDomain();

  // Get the current domain
  const currentDomain = window.location.hostname;

  // Check if the current domain matches the obfuscated domain
  if (currentDomain === obfuscatedDomain) {
    // Access is allowed
    document.body.innerHTML = "<h1>Access to this domain is allowed</h1>";
  } else {
    // Session token doesn't match; access is blocked
    document.body.innerHTML = "<h1>Access to this domain is blocked</h1>";
  }
}

// Function to generate an obfuscated domain
function generateObfuscatedDomain() {
  // Generate a random subdomain
  const subdomain = Math.random().toString(36).substring(7);

  // Combine with a fixed top-level domain
  return subdomain + `${window.location.hostname}`;
}

// Call the checkAccess function to verify access
checkAccess();