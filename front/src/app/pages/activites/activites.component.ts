import { Component, OnInit } from '@angular/core';
import { ActivitesService } from 'src/app/_services/activites.service';
import { LocalisationService } from 'src/app/_services/localisation.service';

@Component({
    selector: 'app-activites',
    templateUrl: './activites.component.html',
    styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {
    latitude: number = 0;
    longitude: number = 0;
    zoom: number = 0;

    constructor(private localisation: LocalisationService, private activiteService: ActivitesService) { }

    ngOnInit(): void {
        this.localisation.getPosition().then(pos => {
            // console.log(`Positon: ${pos.lng} ${pos.lat}`);
            this.latitude = pos.lat;
            this.longitude = pos.lng;
            this.zoom = 15;
        });
        this.getActivites()
    }

    getActivites(): void {
        this.activiteService.getActivites().subscribe(test=>{
            console.log(test)
        })
    }

}
