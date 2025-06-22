function cTiChanged() {
  const input = document.getElementById('themeLocator');
  const checker = document.getElementById('cTcheck');
  const apply = document.getElementById('applySettings');
  const message = document.getElementById('cTmessage');
  async function checkFileExistence() {
      const filePath = input.value.trim();
      if (!filePath) {
          message.textContent = "Please enter a file path.";
          apply.style.display = 'none';
          return;
      }
      const fullUrl = window.location.origin + filePath; 
      try {
          const response = await fetch(fullUrl, { method: 'HEAD' });
          if (response.ok) {
              message.textContent = `File exists: ${fullUrl}`;
              message.style.color = 'green';
              apply.style.display = 'block';
          } else if (response.status === 404) {
              message.textContent = `File not found: ${fullUrl}`;
              message.style.color = 'red';
              apply.style.display = 'none';
          } else {
              message.textContent = `Error checking file: ${response.status} ${response.statusText}`;
              message.style.color = 'orange';
              apply.style.display = 'none';
          }
      } catch (error) {
          message.textContent = `Network error: ${error.message}`;
          message.style.color = 'red';
          apply.style.display = 'none';
      }
  }
  checker.addEventListener('click', checkFileExistence);
  input.addEventListener('input', () => {
      message.textContent = '';
      apply.style.display = 'none';
  });
}