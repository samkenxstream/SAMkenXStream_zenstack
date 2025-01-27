/* eslint-disable @typescript-eslint/no-explicit-any */
/// Types copied over from Prisma's generated code to avoid being broken due to Prisma upgrades

export type Enumerable<T> = T | Array<T>;

type _TupleToUnion<T> = T extends (infer E)[] ? E : never;

export type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;

export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Pick<T, MaybeTupleToUnion<K>>;
