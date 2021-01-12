import { async, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { UserService } from "../user/user.service";
import { FooterComponent } from "./footer.component"

describe('O component Footer', ()=> {
    let component: FooterComponent;

    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [UserService],
            declarations: [FooterComponent]
        }).compileComponents();
    }));

    beforeEach(()=>{

        const userService = TestBed.get(UserService);

        spyOn(userService, 'getUser').and.returnValue(of({
            email: 'alvaro@alvaro.com',
            name: 'Alvaro',
            id: 1
        }));

        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()
    });

    it('deve ser instanciado', ()=> {
        expect(component).toBeTruthy();
    });
});