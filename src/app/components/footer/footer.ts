import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  readonly siteContent = inject(SiteContentService);

  ngOnInit(): void {
    void this.siteContent.load();
  }
}