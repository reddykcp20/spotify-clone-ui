import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private Userdata: any[] = [
    { email: 'a19104019@gmail.com' },
    { password: 'Chandhu@007' },
  ];
  Accessstatus = false;
  GetUser = (mail: String, pass: String) => {
    if (
      this.Userdata.find((e) => e.email === mail) &&
      this.Userdata.find((e) => e.password === pass)
    )
      this.Accessstatus = true;
    else this.Accessstatus = false;
    return this.Accessstatus;
  };
}
