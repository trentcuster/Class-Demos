import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import {UniversityLibrarian, ReferenceItem, PublicLibrarian} from './classes';
import * as util from './lib/utilityFunctions';

let lib1 = new UniversityLibrarian();
let lib2 = new PublicLibrarian();

