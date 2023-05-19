import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "iPhone 12 pro max",
        price: 57500,
        img: "../../public/images/apple_iphone_12_pro_max.jpg",
      },
      {
        id: 2,
        name: "Samsung Galaxy Zip",
        price: 35299,
        img: "../../public/images/samsung_galaxy_zip.jpg",
      },
      {
        id: 3,
        name: "BlackBerry z10",
        price: 27999,
        img: "../../public/images/blackberry_z10.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this.user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this.user;
  }
}
