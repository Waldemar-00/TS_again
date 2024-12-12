"use strict";
const tuple = [11, 'WebDev'];
const [id, skillName] = tuple;
//! length in tuples is const, tuple.length = 3 Type '3' is not assignable to type '2'
tuple.push('some');
tuple.forEach(s => console.log(s));
//? ...boolean[]
const tupleArray = [1, 'WebDev', true, false, true]; //? any length
const readonlyTuple = tuple;
const readonlyTupleArray = [222, 'Developer']; //* it is ARRAY!!!!!!
//! readonlyTuple.push(114) Property 'push' does not exist on type 'readonly [number, string]'
//! readonlyTuple[1] = 'something'  Cannot assign to '1' because it is a read-only property.
//! ________________USE TUPLES with __READONLY__ to stop using push___________________
