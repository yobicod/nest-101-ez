import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { CATS } from '../../data/data';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = CATS;

  public find(query: Cat): Cat[] | [] {
    const { name, age, gender } = query;
    const cats = this.cats.filter((cat) => {
      let match: boolean = true;
      if (name) {
        match = cat.name.toLowerCase() === name.toLowerCase();
      }

      if (age) {
        match = match && cat.age === Number(age);
      }

      if (gender) {
        match = match && cat.gender === gender;
      }

      return match;
    });
    return cats;
  }

  public findByName(name: string): Cat[] | [] {
    return this.cats.filter(
      (cat) => cat.name.toLowerCase() === name.toLowerCase(),
    );
  }

  public findMale(): Cat[] | [] {
    return this.cats.filter((cat) => cat.gender === 'MALE');
  }
}
