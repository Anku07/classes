class Person{
    constructor(name, age , country){
        this.personName = name;
        this.personsAge = age,
        this.personsCountry = country
    }
    getPersonsDetail(){
        return {
            Name : this.personName,
            Age : this.Age,
            Country : this.personsCountry
        }
    }
   getPersonsName(){
    return this.personName
   }
   getPersonAge(){
    return this.personsAge
   }
   getPersonscountry(){
    return this.personsCountry
   }
}
export { Person }