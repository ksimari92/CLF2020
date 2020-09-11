import fs, { readFileSync } from 'fs';
import rs from 'readline-sync';
import { stringify } from 'querystring';

abstract class ArticuloLectura {
    private titulo: string;
    protected cantPagina: number;
    private isbn: number;
    private autor:string;

    public constructor(titulo: string, cantPagina: number, isbn: number, autor:string) {
        this.titulo = titulo;
        this.cantPagina = cantPagina;
        this.isbn = isbn;
        this.autor = autor;
    }
 
    public getAutor(): string{
        return this.autor;
    }

    public getISBN(): number {
        return this.isbn;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getCantPag(): number {
        return this.cantPagina;
    }

    abstract setCantidadPaginas(modificar: number);
}

class Libro extends ArticuloLectura {
    private editorial: string;

    public constructor(titulo: string, cantPagina: number, isbn: number, autor: string, editorial: string) {
        super(titulo, cantPagina, isbn, autor);
        this.editorial = editorial;
    }

    public setCantidadPaginas(modificar: number) {
        modificar = rs.questionInt("Ingrese nueva cantidad de paginas: ");
        this.cantPagina = modificar;

    }

}

class Revista extends ArticuloLectura {
    private articulo: string;
    private cantAnuncios: number;

    public constructor(titulo: string, cantPagina: number, isbn: number, autor:string, articulo: string, cantAnuncios: number) {
        super(titulo, cantPagina, isbn, autor);
        this.articulo = articulo;
        this.cantAnuncios = cantAnuncios;
    }

    public setCantidadPaginas(modificar: number) {
        modificar = rs.questionInt("Ingrese nueva cantidad de paginas: ");
        if (modificar <= 50) {
            this.cantPagina = modificar;
        } else {
            console.log("Error, vuelva a intentarlo!");
            modificar = rs.questionInt("Ingrese nueva cantidad de paginas: ");
        }

    }
}

class Biblioteca {
    private elementos: ArticuloLectura[];
    private nombreBiblioteca: string;
    private direccion: string;

    public constructor(nombreBiblioteca: string, direccion: string, elementos?: ArticuloLectura[]) {
        this.elementos = elementos;
        this.nombreBiblioteca = nombreBiblioteca;
        this.direccion = direccion;
    }

    public insertar(): boolean {
        let nuevoElemento: number = rs.questionInt("Ingrese 1 para ingresar un libro o 2 para ingresar una revista: ");
        if (nuevoElemento == 1) {
            let titulo: string = rs.question("Ingrese titulo: ");
            let cantPagina: number = rs.questionInt("Ingrese cantidad de paginas: ");
            let isbn: number = rs.questionInt("Ingrese ISBN: ");
            let autor: string = rs.question("Ingrese Autor: ");
            let editorial: string = rs.question("Ingrese editorial: ");
            let nuevoLibro = new Libro(titulo, cantPagina, isbn, autor, editorial);

            listaElementos.push(nuevoLibro);

            return true;
        } else if (nuevoElemento == 2) {
            let titulo: string = rs.question("Ingrese titulo: ");
            let cantPagina: number = rs.questionInt("Ingrese cantidad de paginas: ");
            let isbn: number = rs.questionInt("Ingrese ISBN: ");
            let autor: string = rs.question("Ingrese Autor: ");
            let articulo: string = rs.question("Ingrese articulo: ");
            let cantAnuncios: number = rs.questionInt("Ingrese cantidad de anuncios: ");
            let nuevaRevista = new Revista(titulo, cantPagina, isbn, autor, articulo, cantAnuncios);

            listaElementos.push(nuevaRevista);

            return true;
        } else {
            return false;
        }
    }

    public buscar(): boolean {
        let identificador: number = rs.questionInt("Ingrese ISBN: ");

        for (let i: number = 0; i <= listaElementos.length; i++) {
            if (identificador === listaElementos[i].getISBN()) {
                return true;
            } else {
                console.log("El ISBN no se encuentra en el registro");
            }
        }
    }

    public modificarpaginas(): boolean {
        let identificador: number = rs.questionInt("Ingrese ISBN: ");
        let paginas: number = rs.questionInt("Ingrese nuevo numero de paginas: ");

        for (let i: number = 0; i <= listaElementos.length; i++) {
            if (identificador == listaElementos[i].getISBN()) {
                listaElementos[i].setCantidadPaginas(paginas);
                return true;
            } else {
                return false;
            }
        }
    }

    public eliminarElemento(): boolean {
        let identificador: number = rs.questionInt("Ingrese ISBN: ");

        for (let i: number = 0; i < listaElementos.length; i++) {
            if (identificador == listaElementos[i].getISBN()){
                listaElementos.splice(listaElementos[i].getISBN());

                return true;
            }else{
                return false;
            }
        }
    }

    public buscarPorAutor():string[]{
        let autor:string= rs.question("Ingrese el nombre del autor: ");
        let librosAutor:string[]= [];

        for(let i:number=0; i<listaElementos.length;i++){
            if(autor === listaElementos[i].getAutor()){
                librosAutor.push(listaElementos[i].getAutor());
            }

            return librosAutor;
        }


    }
}


let listaElementos: ArticuloLectura[];

let revista = new Revista("Pronto", 50, 2578, "Juan", "Hola!", 3);
let revista1 = new Revista("Mujeres", 25, 1123,"Lito", "Belleza", 1);
let revista2 = new Revista("VOGUE", 10, 6958,"Pepe", "Limpieza de cutis", 4);

let libro = new Libro("El principito", 45, 5847, " Antoine de Saint Exupery", "Editorial1");
let libro1 = new Libro("Libro de prueba", 138, 2569, "Autor de prueba", "Editorial2");

listaElementos.push(revista, revista1, revista2, libro, libro1);



