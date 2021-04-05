function load(service) {
  Redoc.init(`/openapis/${service}/openapi.json`, {
    hideDownloadButton: true,
    theme: {
      spacing: {
        unit: 5,
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',

        headings: {
          fontFamily: 'Montserrat, sans-serif',
        },
        code: {
          color: '#e53935',
          backgroundColor: 'rgba(38, 50, 56, 0.05)',
          fontFamily: 'Courier, monospace',
        },
      },
      menu: {
        backgroundColor: '#fafafa',
        textColor: '#333333',
      },
      rightPanel: {
        backgroundColor: '#263238',
        textColor: '#ffffff',
      },
    },
  }, document.getElementById('redoc-container'));
};
