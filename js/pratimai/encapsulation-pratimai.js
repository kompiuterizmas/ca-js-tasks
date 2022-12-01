class House {
    #address; // # - private
    #city;
    #owners;
  
    constructor(address, city, owners) {
      this.address = address;
      this.city = city;
      this.owners = owners;
    }
  
    // Setter'ius ir Getter'ius
    set owners(value) {
      if (!(value instanceof Array)) {
        console.error(`Klaida: House.setOwners argumentas privalo būti masyvas.\n\tGauta: ${value}`);
        return; // return; - nutraukia funkciją;
      }
      if (!value.every((el) => el instanceof Object)) {
        console.error(`Klaida: House.setOwners masyvo visi elementai turi būti objektai.\n\tGauta: ${value}`);
        return; // return; - nutraukia funkciją;
      }
      if (!value.every((el) => typeof el.name === 'string')) {
        console.error(`Klaida: House.setOwners masyvo visi elementai turi turėti savybę 'name' .\n\tGauta: ${value}`);
        return; // return; - nutraukia funkciją;
      }
  
      this.#owners = value;
    }
  
    get owners() {
      // TODO: Atliekamos duomenų pasiekimo apsaugos...
      return this.#owners;
    }
  
    set address(address){
        if(!(typeof address === "string")){
            console.error(`Klaida: adresas turi būti string`)
            return;
        }
        this.#address = address;
    }
    get address(){
        return this.#address;
    }
    set city(city){
        if(!(typeof city === "string")){
            console.error(`Klaida: miestas turi būti string`)
            return;
        }
        this.#city = city;
    }
    get city(){
        return this.#city;
    }
    printOwners() {
      const ownersRows = '\t' + this.#owners.map(({ name }) => name).join('\n\t');
      console.log(`${this.#address}, ${this.#city}. Owners:\n${ownersRows}`);
    }
  }
  
  const houses = [
    new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
    new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
    new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
    new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
  ];
  
  console.groupCollapsed('1. HouseInstance.owners savybės inkapsuliacija');
  {
    houses[0].owners = 5;
    houses[0].owners = [77, 65];
    houses[0].owners = [{ name: 'Verslioras Eurikas' }, 7];
    houses[0].owners = [{ name: 'Verslioras Eurikas' }, { name: 'Biznė Eurikienė' }];
    houses.forEach(house => house.printOwners());
  }
  console.groupEnd();
  
  console.groupCollapsed('2. HouseInstance.address savybės inkapsuliacija');
  {
    houses[0].address = 5;
    houses[0].address = {address: 'žodis'};
    houses[0].address = 'Pakeista g. 12';
    houses.forEach(house => house.printOwners());
  }
  console.groupEnd();
  
  console.groupCollapsed('3. HouseInstance.city savybės inkapsuliacija');
  {
    houses[0].city = 5;
    houses[0].city = {city: 'miestas'};
    houses[0].city = 'Pakeistas miestas';
    houses.forEach(house => house.printOwners());
  }
  console.groupEnd();
  