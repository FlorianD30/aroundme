import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: any = {
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const { firstname, lastname, email, password } = this.form;

        this.authService.register(firstname, lastname, email, password).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.authService.login(email, password).subscribe(
                    data => {
                        this.tokenStorage.saveToken(data.accessToken);
                        this.tokenStorage.saveUser(data);

                        window.location.assign("/profile");
                    },
                    err => {
                        this.errorMessage = err.error.message;
                    }
                );
            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        );
    }
}