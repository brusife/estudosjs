function saveAsPNG() {
    const element = document.getElementById('res');
  
    html2canvas(element).then(function(canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL("image/png");
      link.download = 'figurinha.png';
      link.click();
    });
  }