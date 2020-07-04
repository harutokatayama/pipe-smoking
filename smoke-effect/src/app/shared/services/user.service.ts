import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    loginStatus = false;

    constructor(
    ) {

    }

    getUsers() {
        return USERS;
    }

    getUser(id: number) {
        return USERS[id];
    }

    login() {
        this.loginStatus = !this.loginStatus;

    }

}

const USERS = [
    {
        id: 1,
        name: 'haruto1',
        email: 'aaa@bbb',
        phone: '000-0000-000',
        card: 1,
        methodOfPayment: 2,
        login: true,
        favorite:
        [
            3, 5, 6
        ],
        cart:[
            {id: 1, name: 'Dunhil charch warden', amount: 1},
            {id: 2, name: 'Tuge hand made', amount: 3},
            {id: 3, name: 'high chimney', amount: 4}
        ],
        address: {
            pinCode: '777-7777',
            country: 'japan',
            building: 'ka-sa kitahorie'
        }
    },
    {
        id: 2,
        name: 'haruto2',
        email: 'ccc@ddd',
        phone: '000-3333-000',
        card: 3,
        methodOfPayment: 1,
        login: false,
        favorite:
        [
            3, 5, 6
        ],
        cart:[
            {id: 1, name: 'Dunhil charch warden', amount: 1},
            {id: 2, name: 'Tuge hand made', amount: 3},
            {id: 3, name: 'high chimney', amount: 4}
        ],
        address: {
            pinCode: '777-7777',
            country: 'japan',
            building: 'ka-sa kitahorie'
        }
    }
    ,
    {
        id: 3,
        name: 'haruto3',
        email: 'aaa@yyy',
        phone: '222-0000-000',
        card: 1,
        methodOfPayment: 2,
        login: true,
        favorite:
        [
            3, 5, 6
        ],
        cart:[
            {id: 1, name: 'Dunhil charch warden', amount: 1},
            {id: 2, name: 'Tuge hand made', amount: 3},
            {id: 3, name: 'high chimney', amount: 4}
        ],
        address: {
            pinCode: '777-7777',
            country: 'japan',
            building: 'ka-sa kitahorie'
        }
    }
    ,
    {
        id: 4,
        name: 'haruto4',
        email: 'hhh@bbb',
        phone: '555-0000-000',
        card: 3,
        methodOfPayment: 2,
        login: true,
        favorite:
        [
            3, 5, 6
        ],
        cart:[
            {id: 1, name: 'Dunhil charch warden', amount: 1},
            {id: 2, name: 'Tuge hand made', amount: 3},
            {id: 3, name: 'high chimney', amount: 4}
        ],
        address: {
            pinCode: '777-7777',
            country: 'japan',
            building: 'ka-sa kitahorie'
        }
    }
    ,
    {
        id: 5,
        name: 'haruto5',
        email: 'lll@bbb',
        phone: '000-0000-666',
        card: 4,
        methodOfPayment: 2,
        login: true,
        favorite:
        [
            3, 5, 6
        ],
        cart:[
            {id: 1, name: 'Dunhil charch warden', amount: 1},
            {id: 2, name: 'Tuge hand made', amount: 3},
            {id: 3, name: 'high chimney', amount: 4}
        ],
        address: {
            pinCode: '777-7777',
            country: 'japan',
            building: 'ka-sa kitahorie'
        }
    }
];
