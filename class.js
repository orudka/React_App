class users {
    constructor(username, role) {
        this.name = username;
        this.role = role;
    }

    combine() {
        return `${this.name} ${this.role}`
    }
}

var listuser = new users('orudka', 'admin')
console.log(listuser.combine());

listuser = new users('brudka', 'user');
console.log(listuser.combine());


//////////////////////////////////////////////


class cat {
    constructor (eyecolor, name, poroda) {
        this.eyecolor = eyecolor;
        this.name = name;
        this.poroda = poroda;
    }

    sound() {
        console.log('meov')
    }

    info() {
        console.log(`${this.eyecolor} ${this.name} ${this.poroda} ${this.owner.name}`)
    }

    setOwner(user) {
        this.owner = user;
        
    }
}

var catsay = new cat('yellow', 'Wiskarick', 'metys');
catsay.sound();
catsay.setOwner(listuser);
catsay.info();
var cat1 = new cat('green', 'Shukher', 'blackf');
cat1.sound();
cat1.info();


//////////////////////////////////////////////


class pasport {
    constructor (fname, lname, idnumber, city, country) {
        this.firstname = fname,
        this.lastname = lname,
        this.identificarornumber = idnumber,
        this.adresscity = city,
        this.adresscountry = country
    }

    action(){
        return `${this.firstname} ${this.lastname} ${this.identificarornumber} ${this.adresscity} ${this.adresscountry}`
    }
}

var personalpasport = new pasport('Oksana', 'Rudka', '002447866', 'Lviv', 'Ukraine');
console.log(personalpasport.action());
personalpasport = new pasport('Bogdan', 'BigBoss', 'Agent007', 'CoolCity', 'TheBestCountryEver');
console.log(personalpasport.action());


//////////////////////////////////////////////


