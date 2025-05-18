
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model House
 * 
 */
export type House = $Result.DefaultSelection<Prisma.$HousePayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ExpenseParticipant
 * 
 */
export type ExpenseParticipant = $Result.DefaultSelection<Prisma.$ExpenseParticipantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.house`: Exposes CRUD operations for the **House** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Houses
    * const houses = await prisma.house.findMany()
    * ```
    */
  get house(): Prisma.HouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseParticipant`: Exposes CRUD operations for the **ExpenseParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseParticipants
    * const expenseParticipants = await prisma.expenseParticipant.findMany()
    * ```
    */
  get expenseParticipant(): Prisma.ExpenseParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    House: 'House',
    Expense: 'Expense',
    ExpenseParticipant: 'ExpenseParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "house" | "expense" | "expenseParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      House: {
        payload: Prisma.$HousePayload<ExtArgs>
        fields: Prisma.HouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findFirst: {
            args: Prisma.HouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findMany: {
            args: Prisma.HouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          create: {
            args: Prisma.HouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          createMany: {
            args: Prisma.HouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          delete: {
            args: Prisma.HouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          update: {
            args: Prisma.HouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          deleteMany: {
            args: Prisma.HouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          upsert: {
            args: Prisma.HouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          aggregate: {
            args: Prisma.HouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouse>
          }
          groupBy: {
            args: Prisma.HouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseCountArgs<ExtArgs>
            result: $Utils.Optional<HouseCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ExpenseParticipant: {
        payload: Prisma.$ExpenseParticipantPayload<ExtArgs>
        fields: Prisma.ExpenseParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          findFirst: {
            args: Prisma.ExpenseParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          findMany: {
            args: Prisma.ExpenseParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          create: {
            args: Prisma.ExpenseParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          createMany: {
            args: Prisma.ExpenseParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          delete: {
            args: Prisma.ExpenseParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          update: {
            args: Prisma.ExpenseParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          aggregate: {
            args: Prisma.ExpenseParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseParticipant>
          }
          groupBy: {
            args: Prisma.ExpenseParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    house?: HouseOmit
    expense?: ExpenseOmit
    expenseParticipant?: ExpenseParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    houses: number
    ownedHouses: number
    expenses: number
    expenseParticipants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    houses?: boolean | UserCountOutputTypeCountHousesArgs
    ownedHouses?: boolean | UserCountOutputTypeCountOwnedHousesArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    expenseParticipants?: boolean | UserCountOutputTypeCountExpenseParticipantsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpenseParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
  }


  /**
   * Count Type HouseCountOutputType
   */

  export type HouseCountOutputType = {
    members: number
    expenses: number
  }

  export type HouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | HouseCountOutputTypeCountMembersArgs
    expenses?: boolean | HouseCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseCountOutputType
     */
    select?: HouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    participants: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ExpenseCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    pixKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    pixKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    pixKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    pixKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    pixKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    pixKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    pixKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pixKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    houses?: boolean | User$housesArgs<ExtArgs>
    ownedHouses?: boolean | User$ownedHousesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    expenseParticipants?: boolean | User$expenseParticipantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pixKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pixKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pixKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "pixKey" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    houses?: boolean | User$housesArgs<ExtArgs>
    ownedHouses?: boolean | User$ownedHousesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    expenseParticipants?: boolean | User$expenseParticipantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      houses: Prisma.$HousePayload<ExtArgs>[]
      ownedHouses: Prisma.$HousePayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      expenseParticipants: Prisma.$ExpenseParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      pixKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    houses<T extends User$housesArgs<ExtArgs> = {}>(args?: Subset<T, User$housesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedHouses<T extends User$ownedHousesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedHousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenseParticipants<T extends User$expenseParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, User$expenseParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pixKey: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.houses
   */
  export type User$housesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    cursor?: HouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * User.ownedHouses
   */
  export type User$ownedHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    cursor?: HouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.expenseParticipants
   */
  export type User$expenseParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    cursor?: ExpenseParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model House
   */

  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type HouseSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type HouseMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HouseAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type HouseSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type HouseMinAggregateInputType = {
    id?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which House to aggregate.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Houses
    **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
        [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }




  export type HouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithAggregationInput | HouseOrderByWithAggregationInput[]
    by: HouseScalarFieldEnum[] | HouseScalarFieldEnum
    having?: HouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _avg?: HouseAvgAggregateInputType
    _sum?: HouseSumAggregateInputType
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }

  export type HouseGroupByOutputType = {
    id: number
    ownerId: number
    createdAt: Date
    updatedAt: Date
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >


  export type HouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | House$membersArgs<ExtArgs>
    expenses?: boolean | House$expensesArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["house"]>

  export type HouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["house"]>

  export type HouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["house"]>

  export type HouseSelectScalar = {
    id?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["house"]>
  export type HouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | House$membersArgs<ExtArgs>
    expenses?: boolean | House$expensesArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "House"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["house"]>
    composites: {}
  }

  type HouseGetPayload<S extends boolean | null | undefined | HouseDefaultArgs> = $Result.GetResult<Prisma.$HousePayload, S>

  type HouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseCountAggregateInputType | true
    }

  export interface HouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['House'], meta: { name: 'House' } }
    /**
     * Find zero or one House that matches the filter.
     * @param {HouseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseFindUniqueArgs>(args: SelectSubset<T, HouseFindUniqueArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one House that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseFindFirstArgs>(args?: SelectSubset<T, HouseFindFirstArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     * 
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseFindManyArgs>(args?: SelectSubset<T, HouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a House.
     * @param {HouseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     * 
     */
    create<T extends HouseCreateArgs>(args: SelectSubset<T, HouseCreateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Houses.
     * @param {HouseCreateManyArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseCreateManyArgs>(args?: SelectSubset<T, HouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Houses and returns the data saved in the database.
     * @param {HouseCreateManyAndReturnArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Houses and only return the `id`
     * const houseWithIdOnly = await prisma.house.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a House.
     * @param {HouseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     * 
     */
    delete<T extends HouseDeleteArgs>(args: SelectSubset<T, HouseDeleteArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one House.
     * @param {HouseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseUpdateArgs>(args: SelectSubset<T, HouseUpdateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Houses.
     * @param {HouseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseDeleteManyArgs>(args?: SelectSubset<T, HouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseUpdateManyArgs>(args: SelectSubset<T, HouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses and returns the data updated in the database.
     * @param {HouseUpdateManyAndReturnArgs} args - Arguments to update many Houses.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Houses and only return the `id`
     * const houseWithIdOnly = await prisma.house.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one House.
     * @param {HouseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
     */
    upsert<T extends HouseUpsertArgs>(args: SelectSubset<T, HouseUpsertArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
    **/
    count<T extends HouseCountArgs>(
      args?: Subset<T, HouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseAggregateArgs>(args: Subset<T, HouseAggregateArgs>): Prisma.PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the House model
   */
  readonly fields: HouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for House.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends House$membersArgs<ExtArgs> = {}>(args?: Subset<T, House$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends House$expensesArgs<ExtArgs> = {}>(args?: Subset<T, House$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the House model
   */
  interface HouseFieldRefs {
    readonly id: FieldRef<"House", 'Int'>
    readonly ownerId: FieldRef<"House", 'Int'>
    readonly createdAt: FieldRef<"House", 'DateTime'>
    readonly updatedAt: FieldRef<"House", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * House findUnique
   */
  export type HouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findUniqueOrThrow
   */
  export type HouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findFirst
   */
  export type HouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findFirstOrThrow
   */
  export type HouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findMany
   */
  export type HouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which Houses to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House create
   */
  export type HouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to create a House.
     */
    data: XOR<HouseCreateInput, HouseUncheckedCreateInput>
  }

  /**
   * House createMany
   */
  export type HouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * House createManyAndReturn
   */
  export type HouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * House update
   */
  export type HouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to update a House.
     */
    data: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
    /**
     * Choose, which House to update.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House updateMany
   */
  export type HouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House updateManyAndReturn
   */
  export type HouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * House upsert
   */
  export type HouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The filter to search for the House to update in case it exists.
     */
    where: HouseWhereUniqueInput
    /**
     * In case the House found by the `where` argument doesn't exist, create a new House with this data.
     */
    create: XOR<HouseCreateInput, HouseUncheckedCreateInput>
    /**
     * In case the House was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
  }

  /**
   * House delete
   */
  export type HouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter which House to delete.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House deleteMany
   */
  export type HouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Houses to delete
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to delete.
     */
    limit?: number
  }

  /**
   * House.members
   */
  export type House$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * House.expenses
   */
  export type House$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * House without action
   */
  export type HouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    createdById: number | null
    houseId: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    createdById: number | null
    houseId: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: number | null
    title: string | null
    amount: Decimal | null
    paid: boolean | null
    recurring: boolean | null
    shared: boolean | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: number | null
    houseId: number | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    amount: Decimal | null
    paid: boolean | null
    recurring: boolean | null
    shared: boolean | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: number | null
    houseId: number | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    paid: number
    recurring: number
    shared: number
    dueDate: number
    createdAt: number
    updatedAt: number
    createdById: number
    houseId: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    amount?: true
    createdById?: true
    houseId?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    amount?: true
    createdById?: true
    houseId?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    paid?: true
    recurring?: true
    shared?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    houseId?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    paid?: true
    recurring?: true
    shared?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    houseId?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    paid?: true
    recurring?: true
    shared?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    houseId?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: number
    title: string
    amount: Decimal
    paid: boolean
    recurring: boolean
    shared: boolean
    dueDate: Date
    createdAt: Date
    updatedAt: Date
    createdById: number
    houseId: number
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    houseId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    house?: boolean | HouseDefaultArgs<ExtArgs>
    participants?: boolean | Expense$participantsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    houseId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    houseId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    houseId?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "amount" | "paid" | "recurring" | "shared" | "dueDate" | "createdAt" | "updatedAt" | "createdById" | "houseId", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    house?: boolean | HouseDefaultArgs<ExtArgs>
    participants?: boolean | Expense$participantsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      house: Prisma.$HousePayload<ExtArgs>
      participants: Prisma.$ExpenseParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      amount: Prisma.Decimal
      paid: boolean
      recurring: boolean
      shared: boolean
      dueDate: Date
      createdAt: Date
      updatedAt: Date
      createdById: number
      houseId: number
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    house<T extends HouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseDefaultArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Expense$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'Int'>
    readonly title: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly paid: FieldRef<"Expense", 'Boolean'>
    readonly recurring: FieldRef<"Expense", 'Boolean'>
    readonly shared: FieldRef<"Expense", 'Boolean'>
    readonly dueDate: FieldRef<"Expense", 'DateTime'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
    readonly createdById: FieldRef<"Expense", 'Int'>
    readonly houseId: FieldRef<"Expense", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.participants
   */
  export type Expense$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    cursor?: ExpenseParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseParticipant
   */

  export type AggregateExpenseParticipant = {
    _count: ExpenseParticipantCountAggregateOutputType | null
    _avg: ExpenseParticipantAvgAggregateOutputType | null
    _sum: ExpenseParticipantSumAggregateOutputType | null
    _min: ExpenseParticipantMinAggregateOutputType | null
    _max: ExpenseParticipantMaxAggregateOutputType | null
  }

  export type ExpenseParticipantAvgAggregateOutputType = {
    id: number | null
    expenseId: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type ExpenseParticipantSumAggregateOutputType = {
    id: number | null
    expenseId: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type ExpenseParticipantMinAggregateOutputType = {
    id: number | null
    expenseId: number | null
    userId: number | null
    amount: Decimal | null
    paid: boolean | null
  }

  export type ExpenseParticipantMaxAggregateOutputType = {
    id: number | null
    expenseId: number | null
    userId: number | null
    amount: Decimal | null
    paid: boolean | null
  }

  export type ExpenseParticipantCountAggregateOutputType = {
    id: number
    expenseId: number
    userId: number
    amount: number
    paid: number
    _all: number
  }


  export type ExpenseParticipantAvgAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amount?: true
  }

  export type ExpenseParticipantSumAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amount?: true
  }

  export type ExpenseParticipantMinAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amount?: true
    paid?: true
  }

  export type ExpenseParticipantMaxAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amount?: true
    paid?: true
  }

  export type ExpenseParticipantCountAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    amount?: true
    paid?: true
    _all?: true
  }

  export type ExpenseParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseParticipant to aggregate.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseParticipants
    **/
    _count?: true | ExpenseParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseParticipantMaxAggregateInputType
  }

  export type GetExpenseParticipantAggregateType<T extends ExpenseParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseParticipant[P]>
      : GetScalarType<T[P], AggregateExpenseParticipant[P]>
  }




  export type ExpenseParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithAggregationInput | ExpenseParticipantOrderByWithAggregationInput[]
    by: ExpenseParticipantScalarFieldEnum[] | ExpenseParticipantScalarFieldEnum
    having?: ExpenseParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseParticipantCountAggregateInputType | true
    _avg?: ExpenseParticipantAvgAggregateInputType
    _sum?: ExpenseParticipantSumAggregateInputType
    _min?: ExpenseParticipantMinAggregateInputType
    _max?: ExpenseParticipantMaxAggregateInputType
  }

  export type ExpenseParticipantGroupByOutputType = {
    id: number
    expenseId: number
    userId: number
    amount: Decimal
    paid: boolean
    _count: ExpenseParticipantCountAggregateOutputType | null
    _avg: ExpenseParticipantAvgAggregateOutputType | null
    _sum: ExpenseParticipantSumAggregateOutputType | null
    _min: ExpenseParticipantMinAggregateOutputType | null
    _max: ExpenseParticipantMaxAggregateOutputType | null
  }

  type GetExpenseParticipantGroupByPayload<T extends ExpenseParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amount?: boolean
    paid?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amount?: boolean
    paid?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amount?: boolean
    paid?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectScalar = {
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    amount?: boolean
    paid?: boolean
  }

  export type ExpenseParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "userId" | "amount" | "paid", ExtArgs["result"]["expenseParticipant"]>
  export type ExpenseParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseParticipant"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expenseId: number
      userId: number
      amount: Prisma.Decimal
      paid: boolean
    }, ExtArgs["result"]["expenseParticipant"]>
    composites: {}
  }

  type ExpenseParticipantGetPayload<S extends boolean | null | undefined | ExpenseParticipantDefaultArgs> = $Result.GetResult<Prisma.$ExpenseParticipantPayload, S>

  type ExpenseParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseParticipantCountAggregateInputType | true
    }

  export interface ExpenseParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseParticipant'], meta: { name: 'ExpenseParticipant' } }
    /**
     * Find zero or one ExpenseParticipant that matches the filter.
     * @param {ExpenseParticipantFindUniqueArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseParticipantFindUniqueArgs>(args: SelectSubset<T, ExpenseParticipantFindUniqueArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseParticipantFindUniqueOrThrowArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindFirstArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseParticipantFindFirstArgs>(args?: SelectSubset<T, ExpenseParticipantFindFirstArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindFirstOrThrowArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseParticipants
     * const expenseParticipants = await prisma.expenseParticipant.findMany()
     * 
     * // Get first 10 ExpenseParticipants
     * const expenseParticipants = await prisma.expenseParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseParticipantFindManyArgs>(args?: SelectSubset<T, ExpenseParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseParticipant.
     * @param {ExpenseParticipantCreateArgs} args - Arguments to create a ExpenseParticipant.
     * @example
     * // Create one ExpenseParticipant
     * const ExpenseParticipant = await prisma.expenseParticipant.create({
     *   data: {
     *     // ... data to create a ExpenseParticipant
     *   }
     * })
     * 
     */
    create<T extends ExpenseParticipantCreateArgs>(args: SelectSubset<T, ExpenseParticipantCreateArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseParticipants.
     * @param {ExpenseParticipantCreateManyArgs} args - Arguments to create many ExpenseParticipants.
     * @example
     * // Create many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseParticipantCreateManyArgs>(args?: SelectSubset<T, ExpenseParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseParticipants and returns the data saved in the database.
     * @param {ExpenseParticipantCreateManyAndReturnArgs} args - Arguments to create many ExpenseParticipants.
     * @example
     * // Create many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseParticipants and only return the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseParticipant.
     * @param {ExpenseParticipantDeleteArgs} args - Arguments to delete one ExpenseParticipant.
     * @example
     * // Delete one ExpenseParticipant
     * const ExpenseParticipant = await prisma.expenseParticipant.delete({
     *   where: {
     *     // ... filter to delete one ExpenseParticipant
     *   }
     * })
     * 
     */
    delete<T extends ExpenseParticipantDeleteArgs>(args: SelectSubset<T, ExpenseParticipantDeleteArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseParticipant.
     * @param {ExpenseParticipantUpdateArgs} args - Arguments to update one ExpenseParticipant.
     * @example
     * // Update one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseParticipantUpdateArgs>(args: SelectSubset<T, ExpenseParticipantUpdateArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseParticipants.
     * @param {ExpenseParticipantDeleteManyArgs} args - Arguments to filter ExpenseParticipants to delete.
     * @example
     * // Delete a few ExpenseParticipants
     * const { count } = await prisma.expenseParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseParticipantDeleteManyArgs>(args?: SelectSubset<T, ExpenseParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseParticipantUpdateManyArgs>(args: SelectSubset<T, ExpenseParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseParticipants and returns the data updated in the database.
     * @param {ExpenseParticipantUpdateManyAndReturnArgs} args - Arguments to update many ExpenseParticipants.
     * @example
     * // Update many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseParticipants and only return the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseParticipant.
     * @param {ExpenseParticipantUpsertArgs} args - Arguments to update or create a ExpenseParticipant.
     * @example
     * // Update or create a ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.upsert({
     *   create: {
     *     // ... data to create a ExpenseParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseParticipantUpsertArgs>(args: SelectSubset<T, ExpenseParticipantUpsertArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantCountArgs} args - Arguments to filter ExpenseParticipants to count.
     * @example
     * // Count the number of ExpenseParticipants
     * const count = await prisma.expenseParticipant.count({
     *   where: {
     *     // ... the filter for the ExpenseParticipants we want to count
     *   }
     * })
    **/
    count<T extends ExpenseParticipantCountArgs>(
      args?: Subset<T, ExpenseParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseParticipantAggregateArgs>(args: Subset<T, ExpenseParticipantAggregateArgs>): Prisma.PrismaPromise<GetExpenseParticipantAggregateType<T>>

    /**
     * Group by ExpenseParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseParticipant model
   */
  readonly fields: ExpenseParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseParticipant model
   */
  interface ExpenseParticipantFieldRefs {
    readonly id: FieldRef<"ExpenseParticipant", 'Int'>
    readonly expenseId: FieldRef<"ExpenseParticipant", 'Int'>
    readonly userId: FieldRef<"ExpenseParticipant", 'Int'>
    readonly amount: FieldRef<"ExpenseParticipant", 'Decimal'>
    readonly paid: FieldRef<"ExpenseParticipant", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseParticipant findUnique
   */
  export type ExpenseParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant findUniqueOrThrow
   */
  export type ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant findFirst
   */
  export type ExpenseParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant findFirstOrThrow
   */
  export type ExpenseParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant findMany
   */
  export type ExpenseParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipants to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant create
   */
  export type ExpenseParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseParticipant.
     */
    data: XOR<ExpenseParticipantCreateInput, ExpenseParticipantUncheckedCreateInput>
  }

  /**
   * ExpenseParticipant createMany
   */
  export type ExpenseParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseParticipants.
     */
    data: ExpenseParticipantCreateManyInput | ExpenseParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseParticipant createManyAndReturn
   */
  export type ExpenseParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseParticipants.
     */
    data: ExpenseParticipantCreateManyInput | ExpenseParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseParticipant update
   */
  export type ExpenseParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseParticipant.
     */
    data: XOR<ExpenseParticipantUpdateInput, ExpenseParticipantUncheckedUpdateInput>
    /**
     * Choose, which ExpenseParticipant to update.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant updateMany
   */
  export type ExpenseParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseParticipants.
     */
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseParticipants to update
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to update.
     */
    limit?: number
  }

  /**
   * ExpenseParticipant updateManyAndReturn
   */
  export type ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseParticipants.
     */
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseParticipants to update
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseParticipant upsert
   */
  export type ExpenseParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseParticipant to update in case it exists.
     */
    where: ExpenseParticipantWhereUniqueInput
    /**
     * In case the ExpenseParticipant found by the `where` argument doesn't exist, create a new ExpenseParticipant with this data.
     */
    create: XOR<ExpenseParticipantCreateInput, ExpenseParticipantUncheckedCreateInput>
    /**
     * In case the ExpenseParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseParticipantUpdateInput, ExpenseParticipantUncheckedUpdateInput>
  }

  /**
   * ExpenseParticipant delete
   */
  export type ExpenseParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter which ExpenseParticipant to delete.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant deleteMany
   */
  export type ExpenseParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseParticipants to delete
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to delete.
     */
    limit?: number
  }

  /**
   * ExpenseParticipant without action
   */
  export type ExpenseParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    pixKey: 'pixKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HouseScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HouseScalarFieldEnum = (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    paid: 'paid',
    recurring: 'recurring',
    shared: 'shared',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    houseId: 'houseId'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ExpenseParticipantScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    userId: 'userId',
    amount: 'amount',
    paid: 'paid'
  };

  export type ExpenseParticipantScalarFieldEnum = (typeof ExpenseParticipantScalarFieldEnum)[keyof typeof ExpenseParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pixKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    houses?: HouseListRelationFilter
    ownedHouses?: HouseListRelationFilter
    expenses?: ExpenseListRelationFilter
    expenseParticipants?: ExpenseParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pixKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    houses?: HouseOrderByRelationAggregateInput
    ownedHouses?: HouseOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    expenseParticipants?: ExpenseParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pixKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    houses?: HouseListRelationFilter
    ownedHouses?: HouseListRelationFilter
    expenses?: ExpenseListRelationFilter
    expenseParticipants?: ExpenseParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pixKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pixKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HouseWhereInput = {
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    id?: IntFilter<"House"> | number
    ownerId?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type HouseOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type HouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    ownerId?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type HouseOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HouseCountOrderByAggregateInput
    _avg?: HouseAvgOrderByAggregateInput
    _max?: HouseMaxOrderByAggregateInput
    _min?: HouseMinOrderByAggregateInput
    _sum?: HouseSumOrderByAggregateInput
  }

  export type HouseScalarWhereWithAggregatesInput = {
    AND?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    OR?: HouseScalarWhereWithAggregatesInput[]
    NOT?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"House"> | number
    ownerId?: IntWithAggregatesFilter<"House"> | number
    createdAt?: DateTimeWithAggregatesFilter<"House"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"House"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: IntFilter<"Expense"> | number
    title?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"Expense"> | boolean
    recurring?: BoolFilter<"Expense"> | boolean
    shared?: BoolFilter<"Expense"> | boolean
    dueDate?: DateTimeFilter<"Expense"> | Date | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    createdById?: IntFilter<"Expense"> | number
    houseId?: IntFilter<"Expense"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
    participants?: ExpenseParticipantListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    recurring?: SortOrder
    shared?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    house?: HouseOrderByWithRelationInput
    participants?: ExpenseParticipantOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    title?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"Expense"> | boolean
    recurring?: BoolFilter<"Expense"> | boolean
    shared?: BoolFilter<"Expense"> | boolean
    dueDate?: DateTimeFilter<"Expense"> | Date | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    createdById?: IntFilter<"Expense"> | number
    houseId?: IntFilter<"Expense"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
    participants?: ExpenseParticipantListRelationFilter
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    recurring?: SortOrder
    shared?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expense"> | number
    title?: StringWithAggregatesFilter<"Expense"> | string
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    paid?: BoolWithAggregatesFilter<"Expense"> | boolean
    recurring?: BoolWithAggregatesFilter<"Expense"> | boolean
    shared?: BoolWithAggregatesFilter<"Expense"> | boolean
    dueDate?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    createdById?: IntWithAggregatesFilter<"Expense"> | number
    houseId?: IntWithAggregatesFilter<"Expense"> | number
  }

  export type ExpenseParticipantWhereInput = {
    AND?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    OR?: ExpenseParticipantWhereInput[]
    NOT?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    id?: IntFilter<"ExpenseParticipant"> | number
    expenseId?: IntFilter<"ExpenseParticipant"> | number
    userId?: IntFilter<"ExpenseParticipant"> | number
    amount?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"ExpenseParticipant"> | boolean
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpenseParticipantOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    expense?: ExpenseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    OR?: ExpenseParticipantWhereInput[]
    NOT?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    expenseId?: IntFilter<"ExpenseParticipant"> | number
    userId?: IntFilter<"ExpenseParticipant"> | number
    amount?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"ExpenseParticipant"> | boolean
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    _count?: ExpenseParticipantCountOrderByAggregateInput
    _avg?: ExpenseParticipantAvgOrderByAggregateInput
    _max?: ExpenseParticipantMaxOrderByAggregateInput
    _min?: ExpenseParticipantMinOrderByAggregateInput
    _sum?: ExpenseParticipantSumOrderByAggregateInput
  }

  export type ExpenseParticipantScalarWhereWithAggregatesInput = {
    AND?: ExpenseParticipantScalarWhereWithAggregatesInput | ExpenseParticipantScalarWhereWithAggregatesInput[]
    OR?: ExpenseParticipantScalarWhereWithAggregatesInput[]
    NOT?: ExpenseParticipantScalarWhereWithAggregatesInput | ExpenseParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExpenseParticipant"> | number
    expenseId?: IntWithAggregatesFilter<"ExpenseParticipant"> | number
    userId?: IntWithAggregatesFilter<"ExpenseParticipant"> | number
    amount?: DecimalWithAggregatesFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    paid?: BoolWithAggregatesFilter<"ExpenseParticipant"> | boolean
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutMembersInput
    ownedHouses?: HouseCreateNestedManyWithoutOwnerInput
    expenses?: ExpenseCreateNestedManyWithoutCreatedByInput
    expenseParticipants?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutMembersInput
    ownedHouses?: HouseUncheckedCreateNestedManyWithoutOwnerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCreatedByInput
    expenseParticipants?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutMembersNestedInput
    ownedHouses?: HouseUpdateManyWithoutOwnerNestedInput
    expenses?: ExpenseUpdateManyWithoutCreatedByNestedInput
    expenseParticipants?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutMembersNestedInput
    ownedHouses?: HouseUncheckedUpdateManyWithoutOwnerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput
    expenseParticipants?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedHousesInput
    members?: UserCreateNestedManyWithoutHousesInput
    expenses?: ExpenseCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateInput = {
    id?: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutHousesInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedHousesNestedInput
    members?: UserUpdateManyWithoutHousesNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutHousesNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseCreateManyInput = {
    id?: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpensesInput
    house: HouseCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    houseId: number
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpensesNestedInput
    house?: HouseUpdateOneRequiredWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    houseId?: IntFieldUpdateOperationsInput | number
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    houseId: number
  }

  export type ExpenseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    houseId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseParticipantCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    expense: ExpenseCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutExpenseParticipantsInput
  }

  export type ExpenseParticipantUncheckedCreateInput = {
    id?: number
    expenseId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
  }

  export type ExpenseParticipantUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    expense?: ExpenseUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutExpenseParticipantsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expenseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseParticipantCreateManyInput = {
    id?: number
    expenseId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
  }

  export type ExpenseParticipantUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expenseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HouseListRelationFilter = {
    every?: HouseWhereInput
    some?: HouseWhereInput
    none?: HouseWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ExpenseParticipantListRelationFilter = {
    every?: ExpenseParticipantWhereInput
    some?: ExpenseParticipantWhereInput
    none?: ExpenseParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pixKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type HouseMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HouseScalarRelationFilter = {
    is?: HouseWhereInput
    isNot?: HouseWhereInput
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    recurring?: SortOrder
    shared?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    recurring?: SortOrder
    shared?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    recurring?: SortOrder
    shared?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdById?: SortOrder
    houseId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ExpenseParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
  }

  export type ExpenseParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
  }

  export type ExpenseParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
  }

  export type ExpenseParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type HouseCreateNestedManyWithoutMembersInput = {
    create?: XOR<HouseCreateWithoutMembersInput, HouseUncheckedCreateWithoutMembersInput> | HouseCreateWithoutMembersInput[] | HouseUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutMembersInput | HouseCreateOrConnectWithoutMembersInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type HouseCreateNestedManyWithoutOwnerInput = {
    create?: XOR<HouseCreateWithoutOwnerInput, HouseUncheckedCreateWithoutOwnerInput> | HouseCreateWithoutOwnerInput[] | HouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutOwnerInput | HouseCreateOrConnectWithoutOwnerInput[]
    createMany?: HouseCreateManyOwnerInputEnvelope
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpenseCreateWithoutCreatedByInput, ExpenseUncheckedCreateWithoutCreatedByInput> | ExpenseCreateWithoutCreatedByInput[] | ExpenseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatedByInput | ExpenseCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpenseCreateManyCreatedByInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type HouseUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<HouseCreateWithoutMembersInput, HouseUncheckedCreateWithoutMembersInput> | HouseCreateWithoutMembersInput[] | HouseUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutMembersInput | HouseCreateOrConnectWithoutMembersInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type HouseUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<HouseCreateWithoutOwnerInput, HouseUncheckedCreateWithoutOwnerInput> | HouseCreateWithoutOwnerInput[] | HouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutOwnerInput | HouseCreateOrConnectWithoutOwnerInput[]
    createMany?: HouseCreateManyOwnerInputEnvelope
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ExpenseCreateWithoutCreatedByInput, ExpenseUncheckedCreateWithoutCreatedByInput> | ExpenseCreateWithoutCreatedByInput[] | ExpenseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatedByInput | ExpenseCreateOrConnectWithoutCreatedByInput[]
    createMany?: ExpenseCreateManyCreatedByInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HouseUpdateManyWithoutMembersNestedInput = {
    create?: XOR<HouseCreateWithoutMembersInput, HouseUncheckedCreateWithoutMembersInput> | HouseCreateWithoutMembersInput[] | HouseUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutMembersInput | HouseCreateOrConnectWithoutMembersInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutMembersInput | HouseUpsertWithWhereUniqueWithoutMembersInput[]
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutMembersInput | HouseUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutMembersInput | HouseUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type HouseUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<HouseCreateWithoutOwnerInput, HouseUncheckedCreateWithoutOwnerInput> | HouseCreateWithoutOwnerInput[] | HouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutOwnerInput | HouseCreateOrConnectWithoutOwnerInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutOwnerInput | HouseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: HouseCreateManyOwnerInputEnvelope
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutOwnerInput | HouseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutOwnerInput | HouseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpenseCreateWithoutCreatedByInput, ExpenseUncheckedCreateWithoutCreatedByInput> | ExpenseCreateWithoutCreatedByInput[] | ExpenseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatedByInput | ExpenseCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCreatedByInput | ExpenseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpenseCreateManyCreatedByInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCreatedByInput | ExpenseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCreatedByInput | ExpenseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput | ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput | ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutUserInput | ExpenseParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HouseUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<HouseCreateWithoutMembersInput, HouseUncheckedCreateWithoutMembersInput> | HouseCreateWithoutMembersInput[] | HouseUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutMembersInput | HouseCreateOrConnectWithoutMembersInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutMembersInput | HouseUpsertWithWhereUniqueWithoutMembersInput[]
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutMembersInput | HouseUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutMembersInput | HouseUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type HouseUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<HouseCreateWithoutOwnerInput, HouseUncheckedCreateWithoutOwnerInput> | HouseCreateWithoutOwnerInput[] | HouseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutOwnerInput | HouseCreateOrConnectWithoutOwnerInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutOwnerInput | HouseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: HouseCreateManyOwnerInputEnvelope
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutOwnerInput | HouseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutOwnerInput | HouseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ExpenseCreateWithoutCreatedByInput, ExpenseUncheckedCreateWithoutCreatedByInput> | ExpenseCreateWithoutCreatedByInput[] | ExpenseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCreatedByInput | ExpenseCreateOrConnectWithoutCreatedByInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCreatedByInput | ExpenseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ExpenseCreateManyCreatedByInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCreatedByInput | ExpenseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCreatedByInput | ExpenseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput | ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput | ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutUserInput | ExpenseParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedHousesInput = {
    create?: XOR<UserCreateWithoutOwnedHousesInput, UserUncheckedCreateWithoutOwnedHousesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedHousesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutHousesInput = {
    create?: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput> | UserCreateWithoutHousesInput[] | UserUncheckedCreateWithoutHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput | UserCreateOrConnectWithoutHousesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutHouseInput = {
    create?: XOR<ExpenseCreateWithoutHouseInput, ExpenseUncheckedCreateWithoutHouseInput> | ExpenseCreateWithoutHouseInput[] | ExpenseUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseInput | ExpenseCreateOrConnectWithoutHouseInput[]
    createMany?: ExpenseCreateManyHouseInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHousesInput = {
    create?: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput> | UserCreateWithoutHousesInput[] | UserUncheckedCreateWithoutHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput | UserCreateOrConnectWithoutHousesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<ExpenseCreateWithoutHouseInput, ExpenseUncheckedCreateWithoutHouseInput> | ExpenseCreateWithoutHouseInput[] | ExpenseUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseInput | ExpenseCreateOrConnectWithoutHouseInput[]
    createMany?: ExpenseCreateManyHouseInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedHousesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedHousesInput, UserUncheckedCreateWithoutOwnedHousesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedHousesInput
    upsert?: UserUpsertWithoutOwnedHousesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedHousesInput, UserUpdateWithoutOwnedHousesInput>, UserUncheckedUpdateWithoutOwnedHousesInput>
  }

  export type UserUpdateManyWithoutHousesNestedInput = {
    create?: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput> | UserCreateWithoutHousesInput[] | UserUncheckedCreateWithoutHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput | UserCreateOrConnectWithoutHousesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHousesInput | UserUpsertWithWhereUniqueWithoutHousesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHousesInput | UserUpdateWithWhereUniqueWithoutHousesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHousesInput | UserUpdateManyWithWhereWithoutHousesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutHouseNestedInput = {
    create?: XOR<ExpenseCreateWithoutHouseInput, ExpenseUncheckedCreateWithoutHouseInput> | ExpenseCreateWithoutHouseInput[] | ExpenseUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseInput | ExpenseCreateOrConnectWithoutHouseInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutHouseInput | ExpenseUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: ExpenseCreateManyHouseInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutHouseInput | ExpenseUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutHouseInput | ExpenseUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHousesNestedInput = {
    create?: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput> | UserCreateWithoutHousesInput[] | UserUncheckedCreateWithoutHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput | UserCreateOrConnectWithoutHousesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHousesInput | UserUpsertWithWhereUniqueWithoutHousesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHousesInput | UserUpdateWithWhereUniqueWithoutHousesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHousesInput | UserUpdateManyWithWhereWithoutHousesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<ExpenseCreateWithoutHouseInput, ExpenseUncheckedCreateWithoutHouseInput> | ExpenseCreateWithoutHouseInput[] | ExpenseUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutHouseInput | ExpenseCreateOrConnectWithoutHouseInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutHouseInput | ExpenseUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: ExpenseCreateManyHouseInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutHouseInput | ExpenseUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutHouseInput | ExpenseUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type HouseCreateNestedOneWithoutExpensesInput = {
    create?: XOR<HouseCreateWithoutExpensesInput, HouseUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: HouseCreateOrConnectWithoutExpensesInput
    connect?: HouseWhereUniqueInput
  }

  export type ExpenseParticipantCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type HouseUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<HouseCreateWithoutExpensesInput, HouseUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: HouseCreateOrConnectWithoutExpensesInput
    upsert?: HouseUpsertWithoutExpensesInput
    connect?: HouseWhereUniqueInput
    update?: XOR<XOR<HouseUpdateToOneWithWhereWithoutExpensesInput, HouseUpdateWithoutExpensesInput>, HouseUncheckedUpdateWithoutExpensesInput>
  }

  export type ExpenseParticipantUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput | ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput | ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutParticipantsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpenseParticipantsInput = {
    create?: XOR<UserCreateWithoutExpenseParticipantsInput, UserUncheckedCreateWithoutExpenseParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpenseParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutParticipantsInput
    upsert?: ExpenseUpsertWithoutParticipantsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutParticipantsInput, ExpenseUpdateWithoutParticipantsInput>, ExpenseUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutExpenseParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutExpenseParticipantsInput, UserUncheckedCreateWithoutExpenseParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpenseParticipantsInput
    upsert?: UserUpsertWithoutExpenseParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpenseParticipantsInput, UserUpdateWithoutExpenseParticipantsInput>, UserUncheckedUpdateWithoutExpenseParticipantsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HouseCreateWithoutMembersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedHousesInput
    expenses?: ExpenseCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutMembersInput = {
    id?: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutMembersInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutMembersInput, HouseUncheckedCreateWithoutMembersInput>
  }

  export type HouseCreateWithoutOwnerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutHousesInput
    expenses?: ExpenseCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutOwnerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutHousesInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutOwnerInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutOwnerInput, HouseUncheckedCreateWithoutOwnerInput>
  }

  export type HouseCreateManyOwnerInputEnvelope = {
    data: HouseCreateManyOwnerInput | HouseCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCreatedByInput = {
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    house: HouseCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    houseId: number
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutCreatedByInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCreatedByInput, ExpenseUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpenseCreateManyCreatedByInputEnvelope = {
    data: ExpenseCreateManyCreatedByInput | ExpenseCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseParticipantCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    expense: ExpenseCreateNestedOneWithoutParticipantsInput
  }

  export type ExpenseParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    expenseId: number
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
  }

  export type ExpenseParticipantCreateOrConnectWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    create: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput>
  }

  export type ExpenseParticipantCreateManyUserInputEnvelope = {
    data: ExpenseParticipantCreateManyUserInput | ExpenseParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseUpsertWithWhereUniqueWithoutMembersInput = {
    where: HouseWhereUniqueInput
    update: XOR<HouseUpdateWithoutMembersInput, HouseUncheckedUpdateWithoutMembersInput>
    create: XOR<HouseCreateWithoutMembersInput, HouseUncheckedCreateWithoutMembersInput>
  }

  export type HouseUpdateWithWhereUniqueWithoutMembersInput = {
    where: HouseWhereUniqueInput
    data: XOR<HouseUpdateWithoutMembersInput, HouseUncheckedUpdateWithoutMembersInput>
  }

  export type HouseUpdateManyWithWhereWithoutMembersInput = {
    where: HouseScalarWhereInput
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyWithoutMembersInput>
  }

  export type HouseScalarWhereInput = {
    AND?: HouseScalarWhereInput | HouseScalarWhereInput[]
    OR?: HouseScalarWhereInput[]
    NOT?: HouseScalarWhereInput | HouseScalarWhereInput[]
    id?: IntFilter<"House"> | number
    ownerId?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
  }

  export type HouseUpsertWithWhereUniqueWithoutOwnerInput = {
    where: HouseWhereUniqueInput
    update: XOR<HouseUpdateWithoutOwnerInput, HouseUncheckedUpdateWithoutOwnerInput>
    create: XOR<HouseCreateWithoutOwnerInput, HouseUncheckedCreateWithoutOwnerInput>
  }

  export type HouseUpdateWithWhereUniqueWithoutOwnerInput = {
    where: HouseWhereUniqueInput
    data: XOR<HouseUpdateWithoutOwnerInput, HouseUncheckedUpdateWithoutOwnerInput>
  }

  export type HouseUpdateManyWithWhereWithoutOwnerInput = {
    where: HouseScalarWhereInput
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCreatedByInput, ExpenseUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ExpenseCreateWithoutCreatedByInput, ExpenseUncheckedCreateWithoutCreatedByInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCreatedByInput, ExpenseUncheckedUpdateWithoutCreatedByInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCreatedByInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: IntFilter<"Expense"> | number
    title?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"Expense"> | boolean
    recurring?: BoolFilter<"Expense"> | boolean
    shared?: BoolFilter<"Expense"> | boolean
    dueDate?: DateTimeFilter<"Expense"> | Date | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    createdById?: IntFilter<"Expense"> | number
    houseId?: IntFilter<"Expense"> | number
  }

  export type ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    update: XOR<ExpenseParticipantUpdateWithoutUserInput, ExpenseParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput>
  }

  export type ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    data: XOR<ExpenseParticipantUpdateWithoutUserInput, ExpenseParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseParticipantScalarWhereInput
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseParticipantScalarWhereInput = {
    AND?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
    OR?: ExpenseParticipantScalarWhereInput[]
    NOT?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
    id?: IntFilter<"ExpenseParticipant"> | number
    expenseId?: IntFilter<"ExpenseParticipant"> | number
    userId?: IntFilter<"ExpenseParticipant"> | number
    amount?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    paid?: BoolFilter<"ExpenseParticipant"> | boolean
  }

  export type UserCreateWithoutOwnedHousesInput = {
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutMembersInput
    expenses?: ExpenseCreateNestedManyWithoutCreatedByInput
    expenseParticipants?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedHousesInput = {
    id?: number
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutMembersInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCreatedByInput
    expenseParticipants?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedHousesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedHousesInput, UserUncheckedCreateWithoutOwnedHousesInput>
  }

  export type UserCreateWithoutHousesInput = {
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedHouses?: HouseCreateNestedManyWithoutOwnerInput
    expenses?: ExpenseCreateNestedManyWithoutCreatedByInput
    expenseParticipants?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHousesInput = {
    id?: number
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedHouses?: HouseUncheckedCreateNestedManyWithoutOwnerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCreatedByInput
    expenseParticipants?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHousesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput>
  }

  export type ExpenseCreateWithoutHouseInput = {
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutHouseInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutHouseInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutHouseInput, ExpenseUncheckedCreateWithoutHouseInput>
  }

  export type ExpenseCreateManyHouseInputEnvelope = {
    data: ExpenseCreateManyHouseInput | ExpenseCreateManyHouseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedHousesInput = {
    update: XOR<UserUpdateWithoutOwnedHousesInput, UserUncheckedUpdateWithoutOwnedHousesInput>
    create: XOR<UserCreateWithoutOwnedHousesInput, UserUncheckedCreateWithoutOwnedHousesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedHousesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedHousesInput, UserUncheckedUpdateWithoutOwnedHousesInput>
  }

  export type UserUpdateWithoutOwnedHousesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutMembersNestedInput
    expenses?: ExpenseUpdateManyWithoutCreatedByNestedInput
    expenseParticipants?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedHousesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutMembersNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput
    expenseParticipants?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutHousesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHousesInput, UserUncheckedUpdateWithoutHousesInput>
    create: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHousesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHousesInput, UserUncheckedUpdateWithoutHousesInput>
  }

  export type UserUpdateManyWithWhereWithoutHousesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHousesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pixKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutHouseInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutHouseInput, ExpenseUncheckedUpdateWithoutHouseInput>
    create: XOR<ExpenseCreateWithoutHouseInput, ExpenseUncheckedCreateWithoutHouseInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutHouseInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutHouseInput, ExpenseUncheckedUpdateWithoutHouseInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutHouseInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutHouseInput>
  }

  export type UserCreateWithoutExpensesInput = {
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutMembersInput
    ownedHouses?: HouseCreateNestedManyWithoutOwnerInput
    expenseParticipants?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: number
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutMembersInput
    ownedHouses?: HouseUncheckedCreateNestedManyWithoutOwnerInput
    expenseParticipants?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type HouseCreateWithoutExpensesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedHousesInput
    members?: UserCreateNestedManyWithoutHousesInput
  }

  export type HouseUncheckedCreateWithoutExpensesInput = {
    id?: number
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutHousesInput
  }

  export type HouseCreateOrConnectWithoutExpensesInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutExpensesInput, HouseUncheckedCreateWithoutExpensesInput>
  }

  export type ExpenseParticipantCreateWithoutExpenseInput = {
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    user: UserCreateNestedOneWithoutExpenseParticipantsInput
  }

  export type ExpenseParticipantUncheckedCreateWithoutExpenseInput = {
    id?: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
  }

  export type ExpenseParticipantCreateOrConnectWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    create: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseParticipantCreateManyExpenseInputEnvelope = {
    data: ExpenseParticipantCreateManyExpenseInput | ExpenseParticipantCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutMembersNestedInput
    ownedHouses?: HouseUpdateManyWithoutOwnerNestedInput
    expenseParticipants?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutMembersNestedInput
    ownedHouses?: HouseUncheckedUpdateManyWithoutOwnerNestedInput
    expenseParticipants?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseUpsertWithoutExpensesInput = {
    update: XOR<HouseUpdateWithoutExpensesInput, HouseUncheckedUpdateWithoutExpensesInput>
    create: XOR<HouseCreateWithoutExpensesInput, HouseUncheckedCreateWithoutExpensesInput>
    where?: HouseWhereInput
  }

  export type HouseUpdateToOneWithWhereWithoutExpensesInput = {
    where?: HouseWhereInput
    data: XOR<HouseUpdateWithoutExpensesInput, HouseUncheckedUpdateWithoutExpensesInput>
  }

  export type HouseUpdateWithoutExpensesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedHousesNestedInput
    members?: UserUpdateManyWithoutHousesNestedInput
  }

  export type HouseUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutHousesNestedInput
  }

  export type ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    update: XOR<ExpenseParticipantUpdateWithoutExpenseInput, ExpenseParticipantUncheckedUpdateWithoutExpenseInput>
    create: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    data: XOR<ExpenseParticipantUpdateWithoutExpenseInput, ExpenseParticipantUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput = {
    where: ExpenseParticipantScalarWhereInput
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseCreateWithoutParticipantsInput = {
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutExpensesInput
    house: HouseCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutParticipantsInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    houseId: number
  }

  export type ExpenseCreateOrConnectWithoutParticipantsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutExpenseParticipantsInput = {
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutMembersInput
    ownedHouses?: HouseCreateNestedManyWithoutOwnerInput
    expenses?: ExpenseCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutExpenseParticipantsInput = {
    id?: number
    name: string
    email: string
    password: string
    pixKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutMembersInput
    ownedHouses?: HouseUncheckedCreateNestedManyWithoutOwnerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutExpenseParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpenseParticipantsInput, UserUncheckedCreateWithoutExpenseParticipantsInput>
  }

  export type ExpenseUpsertWithoutParticipantsInput = {
    update: XOR<ExpenseUpdateWithoutParticipantsInput, ExpenseUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutParticipantsInput, ExpenseUncheckedUpdateWithoutParticipantsInput>
  }

  export type ExpenseUpdateWithoutParticipantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpensesNestedInput
    house?: HouseUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    houseId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutExpenseParticipantsInput = {
    update: XOR<UserUpdateWithoutExpenseParticipantsInput, UserUncheckedUpdateWithoutExpenseParticipantsInput>
    create: XOR<UserCreateWithoutExpenseParticipantsInput, UserUncheckedCreateWithoutExpenseParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpenseParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpenseParticipantsInput, UserUncheckedUpdateWithoutExpenseParticipantsInput>
  }

  export type UserUpdateWithoutExpenseParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutMembersNestedInput
    ownedHouses?: HouseUpdateManyWithoutOwnerNestedInput
    expenses?: ExpenseUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutExpenseParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutMembersNestedInput
    ownedHouses?: HouseUncheckedUpdateManyWithoutOwnerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type HouseCreateManyOwnerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateManyCreatedByInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    houseId: number
  }

  export type ExpenseParticipantCreateManyUserInput = {
    id?: number
    expenseId: number
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
  }

  export type HouseUpdateWithoutMembersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedHousesNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseUpdateWithoutOwnerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutHousesNestedInput
    expenses?: ExpenseUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutHousesNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneRequiredWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houseId?: IntFieldUpdateOperationsInput | number
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houseId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseParticipantUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    expense?: ExpenseUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expenseId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expenseId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseCreateManyHouseInput = {
    id?: number
    title: string
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
    recurring?: boolean
    shared?: boolean
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
  }

  export type UserUpdateWithoutHousesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedHouses?: HouseUpdateManyWithoutOwnerNestedInput
    expenses?: ExpenseUpdateManyWithoutCreatedByNestedInput
    expenseParticipants?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHousesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedHouses?: HouseUncheckedUpdateManyWithoutOwnerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCreatedByNestedInput
    expenseParticipants?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHousesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pixKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutHouseInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    recurring?: BoolFieldUpdateOperationsInput | boolean
    shared?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseParticipantCreateManyExpenseInput = {
    id?: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    paid?: boolean
  }

  export type ExpenseParticipantUpdateWithoutExpenseInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutExpenseParticipantsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateWithoutExpenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutExpenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}