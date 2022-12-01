class House {
    #address; // # - private
    #city;
    #owners;
  
    constructor(address, city, owners) {
      this.setAddress(address);
      this.setCity(city);
      this.setOwners(owners);
    }
  
    // Setter'ius ir Getter'ius
    setOwners(owners) {
      if (!(owners instanceof Array)) {
        console.error(`Klaida: House.setOwners argumentas privalo būti masyvas.\n\tGauta: ${owners}`);
        return; // return; - nutraukia funkciją;
      }
      if (!owners.every((owner) => owner instanceof Object)) {
        console.error(`Klaida: House.setOwners masyvo visi elementai turi būti objektai.\n\tGauta: ${owners}`);
        return; // return; - nutraukia funkciją;
      }
      if (!owners.every((owner) => typeof owner.name === 'string')) {
        console.error(`Klaida: House.setOwners masyvo visi elementai turi turėti savybę 'name' .\n\tGauta: ${owners}`);
        return; // return; - nutraukia funkciją;
      }
  
      this.#owners = owners;
    }
  
    getOwners() {
      // TODO: Atliekamos duomenų pasiekimo apsaugos...
      return this.#owners;
    }
  
    setAddress(address){
        if(!(typeof address === "string")){
            console.error(`Klaida: adresas turi būti string`)
            return;
        }
        this.#address = address;
    }
    getAddress(){
        return this.#address;
    }
    setCity(city){
        if(!(typeof city === "string")){
            console.error(`Klaida: miestas turi būti string`)
            return;
        }
        this.#city = city;
    }
    getCity(){
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
    houses[0].setOwners(5);
    houses[0].setOwners([77, 65]);
    houses[0].setOwners([{ name: 'Verslioras Eurikas' }, 7]);
    houses[0].setOwners([{ name: 'Verslioras Eurikas' }, { name: 'Biznė Eurikienė' }]);
    houses.forEach(house => house.printOwners());
  }
  console.groupEnd();
  
  console.groupCollapsed('2. HouseInstance.address savybės inkapsuliacija');
  {
    houses[0].setAddress(5);
    houses[0].setAddress({address: 'žodis'});
    houses[0].setAddress('Pakeista g. 12');
    houses.forEach(house => house.printOwners());
  }
  console.groupEnd();
  
  console.groupCollapsed('3. HouseInstance.city savybės inkapsuliacija');
  {
    houses[0].setCity(5);
    houses[0].setCity({city: 'miestas'});
    houses[0].setCity('Pakeistas miestas');
    houses.forEach(house => house.printOwners());
  }
  console.groupEnd();
  