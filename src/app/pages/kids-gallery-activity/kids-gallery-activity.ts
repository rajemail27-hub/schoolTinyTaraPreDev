import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kids-gallery-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kids-gallery-activity.html',
  styleUrl: './kids-gallery-activity.css'
})
export class KidsGalleryActivity {
  activities = [
    {
      title: 'Rainbow Painting',
      emoji: '🎨',
      description: 'Children explore colour, brush strokes and creativity through joyful painting.',
      accent: 'pink'
    },
    {
      title: 'Story Circle',
      emoji: '📚',
      description: 'Listening, imagination and language skills grow through shared story time.',
      accent: 'yellow'
    },
    {
      title: 'Music & Movement',
      emoji: '🎵',
      description: 'Rhythm, dancing and movement help children build confidence and coordination.',
      accent: 'blue'
    },
    {
      title: 'Sensory Play',
      emoji: '🧩',
      description: 'Hands-on activities encourage discovery, experimentation and problem solving.',
      accent: 'green'
    },
    {
      title: 'Nature Walk',
      emoji: '🌿',
      description: 'Outdoor exploration sparks curiosity and helps children connect with nature.',
      accent: 'purple'
    },
    {
      title: 'Build & Create',
      emoji: '🧱',
      description: 'Blocks, shapes and building games support thinking, planning and creativity.',
      accent: 'orange'
    }
  ];
}
