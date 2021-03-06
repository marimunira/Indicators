import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemTowerService implements InMemoryDbService {
  createDb() {
    let indicators = [
        {
            "id": "1",
            "title": "Уровень карналита в силосной  №1Уровень карналита в силосной башне №1Уровень карналита в силосной башне №1Уровень карналита в силосной башне №1",
            "value": 700,
            "minvalue": 500,
            "maxvalue": 1800
        },
        {
            "id": "2",
            "title": "Уровень карналита в силосной башне №2",
            "value": 38,
            "minvalue": 10,
            "maxvalue": 1400
        },
        {
            "id": "3",
            "title": "Уровень карналита в силосной башне №3",
            "value": 100,
            "minvalue": 0,
            "maxvalue": 100
        },
        {
            "id": "4",
            "title": "Уровень карналита в силосной башне №4",
            "value": 15,
            "minvalue": 0,
            "maxvalue": 100
        },
        {
            "id": "5",
            "title": "Уровень карналита в силосной башне №5",
            "value": 20,
            "minvalue": 0,
            "maxvalue": 100
        },
        {
            "id": "6",
            "title": "Уровень карналита в силосной башне №6",
            "value": 88,
            "minvalue": 50,
            "maxvalue": 100
        },
        {
            "id": "7",
            "title": "Уровень карналита в силосной башне №7",
            "value": 30,
            "minvalue": 0,
            "maxvalue": 100
        },
        {
            "id": "8",
            "title": "Уровень карналита в силосной башне №8",
            "value": 66,
            "minvalue": 0,
            "maxvalue": 100
        }
    ];
    return { indicators };
  }
}