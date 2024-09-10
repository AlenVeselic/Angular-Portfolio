import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-zone',
  standalone: true,
  imports: [],
  templateUrl: './cv-zone.component.html',
  styleUrl: './cv-zone.component.scss',
})
export class CvZoneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      var canvas = <HTMLCanvasElement>document.getElementById('thecanvas');

      if (!canvas) return;

      var ctx = canvas.getContext('2d'),
        count = 25, // number of random  points
        cx = 250,
        cy = 250,
        radius = 256;

      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //ctx.fillStyle = '#CCCCCC';
      //ctx.fillRect(0, 0, canvas.width, canvas.height);

      //ctx.fillStyle = '#000000';

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      //ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
      ctx.closePath();

      ctx.fill();

      var fontBase = 2000, // selected default width for canvas
        fontSize = 70; // default size for font

      function getFont() {
        var ratio = fontSize / fontBase; // calc ratio
        var size = canvas.width * ratio; // get font size based on current width
        return (size | 0) + 'px Libre Franklin'; // set font
      }

      ctx.font = getFont();

      // create random points
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#000000';

      while (count) {
        var pt_angle = Math.random() * 2 * Math.PI;
        var pt_radius_sq = Math.random() * radius * radius;
        var pt_x = Math.sqrt(pt_radius_sq) * Math.cos(pt_angle);
        var pt_y = Math.sqrt(pt_radius_sq) * Math.sin(pt_angle);
        //ctx.fillRect(pt_x + canvas.width / 2, pt_y + canvas.width / 2, 2, 2);
        ctx.strokeText(
          'Click me',
          pt_x + canvas.width / 2,
          pt_y + canvas.width / 2
        );

        ctx.fillText(
          'Click me',
          pt_x + canvas.width / 2,
          pt_y + canvas.width / 2
        );

        count--;
      }
    }, 1000);
  }
}
