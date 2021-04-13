
var CommandBarElements = document.querySelectorAll('.ms-CommandBar');
for (var i = 0; i < CommandBarElements.length; i++) {
  new fabric['CommandBar'](CommandBarElements[i]);
}

var ButtonElements = document.querySelectorAll('.ms-Button');
for (var i = 0; i < ButtonElements.length; i++) {
  new fabric['Button'](ButtonElements[i], function() {
    // Insert Event Here
  });
}

const runBackground = (id, { color, backgroundColor }) => {
  if (document.getElementById(id)) {
    VANTA.NET({
      el: `#${id}`,
      color,
      backgroundColor,

      scale: 1.00,
      scaleMobile: 1.00,

      mouseControls: false,
      touchControls: false,
      gyroControls: false,

      minHeight: 200.00,
      minWidth: 200.00,
    });
  }
};

runBackground('background', { color: '#ffffff', backgroundColor: '#363636', });
runBackground('redoc-background', { color: '#363636', backgroundColor: '#ffffff', });
