
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
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model articles
 * 
 */
export type articles = $Result.DefaultSelection<Prisma.$articlesPayload>
/**
 * Model direct_clients
 * 
 */
export type direct_clients = $Result.DefaultSelection<Prisma.$direct_clientsPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model registers_test
 * 
 */
export type registers_test = $Result.DefaultSelection<Prisma.$registers_testPayload>
/**
 * Model sale_details
 * 
 */
export type sale_details = $Result.DefaultSelection<Prisma.$sale_detailsPayload>
/**
 * Model sales
 * 
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>
/**
 * Model suppliers
 * 
 */
export type suppliers = $Result.DefaultSelection<Prisma.$suppliersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const sales_status: {
  pending: 'pending',
  shipped: 'shipped',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type sales_status = (typeof sales_status)[keyof typeof sales_status]


export const registers_test_genero: {
  M: 'M',
  F: 'F',
  O: 'O'
};

export type registers_test_genero = (typeof registers_test_genero)[keyof typeof registers_test_genero]

}

export type sales_status = $Enums.sales_status

export const sales_status: typeof $Enums.sales_status

export type registers_test_genero = $Enums.registers_test_genero

export const registers_test_genero: typeof $Enums.registers_test_genero

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
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
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.articlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direct_clients`: Exposes CRUD operations for the **direct_clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direct_clients
    * const direct_clients = await prisma.direct_clients.findMany()
    * ```
    */
  get direct_clients(): Prisma.direct_clientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registers_test`: Exposes CRUD operations for the **registers_test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registers_tests
    * const registers_tests = await prisma.registers_test.findMany()
    * ```
    */
  get registers_test(): Prisma.registers_testDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale_details`: Exposes CRUD operations for the **sale_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sale_details
    * const sale_details = await prisma.sale_details.findMany()
    * ```
    */
  get sale_details(): Prisma.sale_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.suppliersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    accounts: 'accounts',
    articles: 'articles',
    direct_clients: 'direct_clients',
    profiles: 'profiles',
    registers_test: 'registers_test',
    sale_details: 'sale_details',
    sales: 'sales',
    suppliers: 'suppliers'
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
      modelProps: "accounts" | "articles" | "direct_clients" | "profiles" | "registers_test" | "sale_details" | "sales" | "suppliers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      articles: {
        payload: Prisma.$articlesPayload<ExtArgs>
        fields: Prisma.articlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findFirst: {
            args: Prisma.articlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findMany: {
            args: Prisma.articlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          create: {
            args: Prisma.articlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          createMany: {
            args: Prisma.articlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.articlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          update: {
            args: Prisma.articlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          deleteMany: {
            args: Prisma.articlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.articlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.articlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.articlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      direct_clients: {
        payload: Prisma.$direct_clientsPayload<ExtArgs>
        fields: Prisma.direct_clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.direct_clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.direct_clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>
          }
          findFirst: {
            args: Prisma.direct_clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.direct_clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>
          }
          findMany: {
            args: Prisma.direct_clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>[]
          }
          create: {
            args: Prisma.direct_clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>
          }
          createMany: {
            args: Prisma.direct_clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.direct_clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>
          }
          update: {
            args: Prisma.direct_clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>
          }
          deleteMany: {
            args: Prisma.direct_clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.direct_clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.direct_clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direct_clientsPayload>
          }
          aggregate: {
            args: Prisma.Direct_clientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirect_clients>
          }
          groupBy: {
            args: Prisma.direct_clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Direct_clientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.direct_clientsCountArgs<ExtArgs>
            result: $Utils.Optional<Direct_clientsCountAggregateOutputType> | number
          }
        }
      }
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      registers_test: {
        payload: Prisma.$registers_testPayload<ExtArgs>
        fields: Prisma.registers_testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registers_testFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registers_testFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>
          }
          findFirst: {
            args: Prisma.registers_testFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registers_testFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>
          }
          findMany: {
            args: Prisma.registers_testFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>[]
          }
          create: {
            args: Prisma.registers_testCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>
          }
          createMany: {
            args: Prisma.registers_testCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.registers_testDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>
          }
          update: {
            args: Prisma.registers_testUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>
          }
          deleteMany: {
            args: Prisma.registers_testDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registers_testUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.registers_testUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registers_testPayload>
          }
          aggregate: {
            args: Prisma.Registers_testAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegisters_test>
          }
          groupBy: {
            args: Prisma.registers_testGroupByArgs<ExtArgs>
            result: $Utils.Optional<Registers_testGroupByOutputType>[]
          }
          count: {
            args: Prisma.registers_testCountArgs<ExtArgs>
            result: $Utils.Optional<Registers_testCountAggregateOutputType> | number
          }
        }
      }
      sale_details: {
        payload: Prisma.$sale_detailsPayload<ExtArgs>
        fields: Prisma.sale_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sale_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sale_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>
          }
          findFirst: {
            args: Prisma.sale_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sale_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>
          }
          findMany: {
            args: Prisma.sale_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>[]
          }
          create: {
            args: Prisma.sale_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>
          }
          createMany: {
            args: Prisma.sale_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sale_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>
          }
          update: {
            args: Prisma.sale_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>
          }
          deleteMany: {
            args: Prisma.sale_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sale_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sale_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sale_detailsPayload>
          }
          aggregate: {
            args: Prisma.Sale_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale_details>
          }
          groupBy: {
            args: Prisma.sale_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sale_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sale_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Sale_detailsCountAggregateOutputType> | number
          }
        }
      }
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>
        fields: Prisma.salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.salesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      suppliers: {
        payload: Prisma.$suppliersPayload<ExtArgs>
        fields: Prisma.suppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findFirst: {
            args: Prisma.suppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findMany: {
            args: Prisma.suppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          create: {
            args: Prisma.suppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          createMany: {
            args: Prisma.suppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.suppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          update: {
            args: Prisma.suppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          deleteMany: {
            args: Prisma.suppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.suppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.suppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.suppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    accounts?: accountsOmit
    articles?: articlesOmit
    direct_clients?: direct_clientsOmit
    profiles?: profilesOmit
    registers_test?: registers_testOmit
    sale_details?: sale_detailsOmit
    sales?: salesOmit
    suppliers?: suppliersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    profiles: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | AccountsCountOutputTypeCountProfilesArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
  }


  /**
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    sale_details: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale_details?: boolean | ArticlesCountOutputTypeCountSale_detailsArgs
  }

  // Custom InputTypes
  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountSale_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sale_detailsWhereInput
  }


  /**
   * Count Type Direct_clientsCountOutputType
   */

  export type Direct_clientsCountOutputType = {
    sales: number
  }

  export type Direct_clientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Direct_clientsCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * Direct_clientsCountOutputType without action
   */
  export type Direct_clientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direct_clientsCountOutputType
     */
    select?: Direct_clientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Direct_clientsCountOutputType without action
   */
  export type Direct_clientsCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    sale_details: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale_details?: boolean | SalesCountOutputTypeCountSale_detailsArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountSale_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sale_detailsWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    articles: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | SuppliersCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    is_active: number
    created_at: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    is_active?: true
    created_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    is_active?: true
    created_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: number
    username: string
    email: string
    password_hash: string
    is_active: boolean | null
    created_at: Date | null
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    is_active?: boolean
    created_at?: boolean
    profiles?: boolean | accounts$profilesArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>



  export type accountsSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "is_active" | "created_at", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | accounts$profilesArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      profiles: Prisma.$profilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password_hash: string
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
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
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends accounts$profilesArgs<ExtArgs> = {}>(args?: Subset<T, accounts$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'Int'>
    readonly username: FieldRef<"accounts", 'String'>
    readonly email: FieldRef<"accounts", 'String'>
    readonly password_hash: FieldRef<"accounts", 'String'>
    readonly is_active: FieldRef<"accounts", 'Boolean'>
    readonly created_at: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts.profiles
   */
  export type accounts$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    cursor?: profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    supplier_id: number
    name: number
    description: number
    price: number
    stock: number
    is_active: number
    created_at: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    id?: true
    supplier_id?: true
    price?: true
    stock?: true
  }

  export type ArticlesSumAggregateInputType = {
    id?: true
    supplier_id?: true
    price?: true
    stock?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    supplier_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    is_active?: true
    created_at?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    supplier_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    is_active?: true
    created_at?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    supplier_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to aggregate.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type articlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithAggregationInput | articlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: articlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: number
    supplier_id: number | null
    name: string
    description: string | null
    price: Decimal
    stock: number | null
    is_active: boolean | null
    created_at: Date | null
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends articlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type articlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplier_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    is_active?: boolean
    created_at?: boolean
    suppliers?: boolean | articles$suppliersArgs<ExtArgs>
    sale_details?: boolean | articles$sale_detailsArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>



  export type articlesSelectScalar = {
    id?: boolean
    supplier_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type articlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplier_id" | "name" | "description" | "price" | "stock" | "is_active" | "created_at", ExtArgs["result"]["articles"]>
  export type articlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | articles$suppliersArgs<ExtArgs>
    sale_details?: boolean | articles$sale_detailsArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $articlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articles"
    objects: {
      suppliers: Prisma.$suppliersPayload<ExtArgs> | null
      sale_details: Prisma.$sale_detailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplier_id: number | null
      name: string
      description: string | null
      price: Prisma.Decimal
      stock: number | null
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type articlesGetPayload<S extends boolean | null | undefined | articlesDefaultArgs> = $Result.GetResult<Prisma.$articlesPayload, S>

  type articlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface articlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articles'], meta: { name: 'articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {articlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articlesFindUniqueArgs>(args: SelectSubset<T, articlesFindUniqueArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articlesFindUniqueOrThrowArgs>(args: SelectSubset<T, articlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articlesFindFirstArgs>(args?: SelectSubset<T, articlesFindFirstArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articlesFindFirstOrThrowArgs>(args?: SelectSubset<T, articlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articlesFindManyArgs>(args?: SelectSubset<T, articlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {articlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends articlesCreateArgs>(args: SelectSubset<T, articlesCreateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articlesCreateManyArgs>(args?: SelectSubset<T, articlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {articlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends articlesDeleteArgs>(args: SelectSubset<T, articlesDeleteArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {articlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articlesUpdateArgs>(args: SelectSubset<T, articlesUpdateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articlesDeleteManyArgs>(args?: SelectSubset<T, articlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articlesUpdateManyArgs>(args: SelectSubset<T, articlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {articlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends articlesUpsertArgs>(args: SelectSubset<T, articlesUpsertArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articlesCountArgs>(
      args?: Subset<T, articlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesGroupByArgs} args - Group by arguments.
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
      T extends articlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articlesGroupByArgs['orderBy'] }
        : { orderBy?: articlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articles model
   */
  readonly fields: articlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suppliers<T extends articles$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, articles$suppliersArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sale_details<T extends articles$sale_detailsArgs<ExtArgs> = {}>(args?: Subset<T, articles$sale_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the articles model
   */
  interface articlesFieldRefs {
    readonly id: FieldRef<"articles", 'Int'>
    readonly supplier_id: FieldRef<"articles", 'Int'>
    readonly name: FieldRef<"articles", 'String'>
    readonly description: FieldRef<"articles", 'String'>
    readonly price: FieldRef<"articles", 'Decimal'>
    readonly stock: FieldRef<"articles", 'Int'>
    readonly is_active: FieldRef<"articles", 'Boolean'>
    readonly created_at: FieldRef<"articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * articles findUnique
   */
  export type articlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findUniqueOrThrow
   */
  export type articlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findFirst
   */
  export type articlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findFirstOrThrow
   */
  export type articlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findMany
   */
  export type articlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles create
   */
  export type articlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to create a articles.
     */
    data: XOR<articlesCreateInput, articlesUncheckedCreateInput>
  }

  /**
   * articles createMany
   */
  export type articlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articlesCreateManyInput | articlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articles update
   */
  export type articlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to update a articles.
     */
    data: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
    /**
     * Choose, which articles to update.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles updateMany
   */
  export type articlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * articles upsert
   */
  export type articlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The filter to search for the articles to update in case it exists.
     */
    where: articlesWhereUniqueInput
    /**
     * In case the articles found by the `where` argument doesn't exist, create a new articles with this data.
     */
    create: XOR<articlesCreateInput, articlesUncheckedCreateInput>
    /**
     * In case the articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
  }

  /**
   * articles delete
   */
  export type articlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter which articles to delete.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles deleteMany
   */
  export type articlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * articles.suppliers
   */
  export type articles$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
  }

  /**
   * articles.sale_details
   */
  export type articles$sale_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    where?: sale_detailsWhereInput
    orderBy?: sale_detailsOrderByWithRelationInput | sale_detailsOrderByWithRelationInput[]
    cursor?: sale_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sale_detailsScalarFieldEnum | Sale_detailsScalarFieldEnum[]
  }

  /**
   * articles without action
   */
  export type articlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
  }


  /**
   * Model direct_clients
   */

  export type AggregateDirect_clients = {
    _count: Direct_clientsCountAggregateOutputType | null
    _avg: Direct_clientsAvgAggregateOutputType | null
    _sum: Direct_clientsSumAggregateOutputType | null
    _min: Direct_clientsMinAggregateOutputType | null
    _max: Direct_clientsMaxAggregateOutputType | null
  }

  export type Direct_clientsAvgAggregateOutputType = {
    id: number | null
  }

  export type Direct_clientsSumAggregateOutputType = {
    id: number | null
  }

  export type Direct_clientsMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
  }

  export type Direct_clientsMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
  }

  export type Direct_clientsCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    phone: number
    address: number
    created_at: number
    _all: number
  }


  export type Direct_clientsAvgAggregateInputType = {
    id?: true
  }

  export type Direct_clientsSumAggregateInputType = {
    id?: true
  }

  export type Direct_clientsMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
  }

  export type Direct_clientsMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
  }

  export type Direct_clientsCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type Direct_clientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which direct_clients to aggregate.
     */
    where?: direct_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direct_clients to fetch.
     */
    orderBy?: direct_clientsOrderByWithRelationInput | direct_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: direct_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direct_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direct_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned direct_clients
    **/
    _count?: true | Direct_clientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Direct_clientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Direct_clientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Direct_clientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Direct_clientsMaxAggregateInputType
  }

  export type GetDirect_clientsAggregateType<T extends Direct_clientsAggregateArgs> = {
        [P in keyof T & keyof AggregateDirect_clients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirect_clients[P]>
      : GetScalarType<T[P], AggregateDirect_clients[P]>
  }




  export type direct_clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: direct_clientsWhereInput
    orderBy?: direct_clientsOrderByWithAggregationInput | direct_clientsOrderByWithAggregationInput[]
    by: Direct_clientsScalarFieldEnum[] | Direct_clientsScalarFieldEnum
    having?: direct_clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Direct_clientsCountAggregateInputType | true
    _avg?: Direct_clientsAvgAggregateInputType
    _sum?: Direct_clientsSumAggregateInputType
    _min?: Direct_clientsMinAggregateInputType
    _max?: Direct_clientsMaxAggregateInputType
  }

  export type Direct_clientsGroupByOutputType = {
    id: number
    full_name: string
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    _count: Direct_clientsCountAggregateOutputType | null
    _avg: Direct_clientsAvgAggregateOutputType | null
    _sum: Direct_clientsSumAggregateOutputType | null
    _min: Direct_clientsMinAggregateOutputType | null
    _max: Direct_clientsMaxAggregateOutputType | null
  }

  type GetDirect_clientsGroupByPayload<T extends direct_clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Direct_clientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Direct_clientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Direct_clientsGroupByOutputType[P]>
            : GetScalarType<T[P], Direct_clientsGroupByOutputType[P]>
        }
      >
    >


  export type direct_clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    sales?: boolean | direct_clients$salesArgs<ExtArgs>
    _count?: boolean | Direct_clientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direct_clients"]>



  export type direct_clientsSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
  }

  export type direct_clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "phone" | "address" | "created_at", ExtArgs["result"]["direct_clients"]>
  export type direct_clientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | direct_clients$salesArgs<ExtArgs>
    _count?: boolean | Direct_clientsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $direct_clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "direct_clients"
    objects: {
      sales: Prisma.$salesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      email: string | null
      phone: string | null
      address: string | null
      created_at: Date | null
    }, ExtArgs["result"]["direct_clients"]>
    composites: {}
  }

  type direct_clientsGetPayload<S extends boolean | null | undefined | direct_clientsDefaultArgs> = $Result.GetResult<Prisma.$direct_clientsPayload, S>

  type direct_clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<direct_clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Direct_clientsCountAggregateInputType | true
    }

  export interface direct_clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['direct_clients'], meta: { name: 'direct_clients' } }
    /**
     * Find zero or one Direct_clients that matches the filter.
     * @param {direct_clientsFindUniqueArgs} args - Arguments to find a Direct_clients
     * @example
     * // Get one Direct_clients
     * const direct_clients = await prisma.direct_clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends direct_clientsFindUniqueArgs>(args: SelectSubset<T, direct_clientsFindUniqueArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direct_clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {direct_clientsFindUniqueOrThrowArgs} args - Arguments to find a Direct_clients
     * @example
     * // Get one Direct_clients
     * const direct_clients = await prisma.direct_clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends direct_clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, direct_clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direct_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direct_clientsFindFirstArgs} args - Arguments to find a Direct_clients
     * @example
     * // Get one Direct_clients
     * const direct_clients = await prisma.direct_clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends direct_clientsFindFirstArgs>(args?: SelectSubset<T, direct_clientsFindFirstArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direct_clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direct_clientsFindFirstOrThrowArgs} args - Arguments to find a Direct_clients
     * @example
     * // Get one Direct_clients
     * const direct_clients = await prisma.direct_clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends direct_clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, direct_clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direct_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direct_clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direct_clients
     * const direct_clients = await prisma.direct_clients.findMany()
     * 
     * // Get first 10 Direct_clients
     * const direct_clients = await prisma.direct_clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direct_clientsWithIdOnly = await prisma.direct_clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends direct_clientsFindManyArgs>(args?: SelectSubset<T, direct_clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direct_clients.
     * @param {direct_clientsCreateArgs} args - Arguments to create a Direct_clients.
     * @example
     * // Create one Direct_clients
     * const Direct_clients = await prisma.direct_clients.create({
     *   data: {
     *     // ... data to create a Direct_clients
     *   }
     * })
     * 
     */
    create<T extends direct_clientsCreateArgs>(args: SelectSubset<T, direct_clientsCreateArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direct_clients.
     * @param {direct_clientsCreateManyArgs} args - Arguments to create many Direct_clients.
     * @example
     * // Create many Direct_clients
     * const direct_clients = await prisma.direct_clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends direct_clientsCreateManyArgs>(args?: SelectSubset<T, direct_clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Direct_clients.
     * @param {direct_clientsDeleteArgs} args - Arguments to delete one Direct_clients.
     * @example
     * // Delete one Direct_clients
     * const Direct_clients = await prisma.direct_clients.delete({
     *   where: {
     *     // ... filter to delete one Direct_clients
     *   }
     * })
     * 
     */
    delete<T extends direct_clientsDeleteArgs>(args: SelectSubset<T, direct_clientsDeleteArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direct_clients.
     * @param {direct_clientsUpdateArgs} args - Arguments to update one Direct_clients.
     * @example
     * // Update one Direct_clients
     * const direct_clients = await prisma.direct_clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends direct_clientsUpdateArgs>(args: SelectSubset<T, direct_clientsUpdateArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direct_clients.
     * @param {direct_clientsDeleteManyArgs} args - Arguments to filter Direct_clients to delete.
     * @example
     * // Delete a few Direct_clients
     * const { count } = await prisma.direct_clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends direct_clientsDeleteManyArgs>(args?: SelectSubset<T, direct_clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direct_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direct_clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direct_clients
     * const direct_clients = await prisma.direct_clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends direct_clientsUpdateManyArgs>(args: SelectSubset<T, direct_clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Direct_clients.
     * @param {direct_clientsUpsertArgs} args - Arguments to update or create a Direct_clients.
     * @example
     * // Update or create a Direct_clients
     * const direct_clients = await prisma.direct_clients.upsert({
     *   create: {
     *     // ... data to create a Direct_clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direct_clients we want to update
     *   }
     * })
     */
    upsert<T extends direct_clientsUpsertArgs>(args: SelectSubset<T, direct_clientsUpsertArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direct_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direct_clientsCountArgs} args - Arguments to filter Direct_clients to count.
     * @example
     * // Count the number of Direct_clients
     * const count = await prisma.direct_clients.count({
     *   where: {
     *     // ... the filter for the Direct_clients we want to count
     *   }
     * })
    **/
    count<T extends direct_clientsCountArgs>(
      args?: Subset<T, direct_clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Direct_clientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direct_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Direct_clientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Direct_clientsAggregateArgs>(args: Subset<T, Direct_clientsAggregateArgs>): Prisma.PrismaPromise<GetDirect_clientsAggregateType<T>>

    /**
     * Group by Direct_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direct_clientsGroupByArgs} args - Group by arguments.
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
      T extends direct_clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: direct_clientsGroupByArgs['orderBy'] }
        : { orderBy?: direct_clientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, direct_clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirect_clientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the direct_clients model
   */
  readonly fields: direct_clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for direct_clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__direct_clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends direct_clients$salesArgs<ExtArgs> = {}>(args?: Subset<T, direct_clients$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the direct_clients model
   */
  interface direct_clientsFieldRefs {
    readonly id: FieldRef<"direct_clients", 'Int'>
    readonly full_name: FieldRef<"direct_clients", 'String'>
    readonly email: FieldRef<"direct_clients", 'String'>
    readonly phone: FieldRef<"direct_clients", 'String'>
    readonly address: FieldRef<"direct_clients", 'String'>
    readonly created_at: FieldRef<"direct_clients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * direct_clients findUnique
   */
  export type direct_clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * Filter, which direct_clients to fetch.
     */
    where: direct_clientsWhereUniqueInput
  }

  /**
   * direct_clients findUniqueOrThrow
   */
  export type direct_clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * Filter, which direct_clients to fetch.
     */
    where: direct_clientsWhereUniqueInput
  }

  /**
   * direct_clients findFirst
   */
  export type direct_clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * Filter, which direct_clients to fetch.
     */
    where?: direct_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direct_clients to fetch.
     */
    orderBy?: direct_clientsOrderByWithRelationInput | direct_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for direct_clients.
     */
    cursor?: direct_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direct_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direct_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of direct_clients.
     */
    distinct?: Direct_clientsScalarFieldEnum | Direct_clientsScalarFieldEnum[]
  }

  /**
   * direct_clients findFirstOrThrow
   */
  export type direct_clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * Filter, which direct_clients to fetch.
     */
    where?: direct_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direct_clients to fetch.
     */
    orderBy?: direct_clientsOrderByWithRelationInput | direct_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for direct_clients.
     */
    cursor?: direct_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direct_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direct_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of direct_clients.
     */
    distinct?: Direct_clientsScalarFieldEnum | Direct_clientsScalarFieldEnum[]
  }

  /**
   * direct_clients findMany
   */
  export type direct_clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * Filter, which direct_clients to fetch.
     */
    where?: direct_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direct_clients to fetch.
     */
    orderBy?: direct_clientsOrderByWithRelationInput | direct_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing direct_clients.
     */
    cursor?: direct_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direct_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direct_clients.
     */
    skip?: number
    distinct?: Direct_clientsScalarFieldEnum | Direct_clientsScalarFieldEnum[]
  }

  /**
   * direct_clients create
   */
  export type direct_clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * The data needed to create a direct_clients.
     */
    data: XOR<direct_clientsCreateInput, direct_clientsUncheckedCreateInput>
  }

  /**
   * direct_clients createMany
   */
  export type direct_clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many direct_clients.
     */
    data: direct_clientsCreateManyInput | direct_clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * direct_clients update
   */
  export type direct_clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * The data needed to update a direct_clients.
     */
    data: XOR<direct_clientsUpdateInput, direct_clientsUncheckedUpdateInput>
    /**
     * Choose, which direct_clients to update.
     */
    where: direct_clientsWhereUniqueInput
  }

  /**
   * direct_clients updateMany
   */
  export type direct_clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update direct_clients.
     */
    data: XOR<direct_clientsUpdateManyMutationInput, direct_clientsUncheckedUpdateManyInput>
    /**
     * Filter which direct_clients to update
     */
    where?: direct_clientsWhereInput
    /**
     * Limit how many direct_clients to update.
     */
    limit?: number
  }

  /**
   * direct_clients upsert
   */
  export type direct_clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * The filter to search for the direct_clients to update in case it exists.
     */
    where: direct_clientsWhereUniqueInput
    /**
     * In case the direct_clients found by the `where` argument doesn't exist, create a new direct_clients with this data.
     */
    create: XOR<direct_clientsCreateInput, direct_clientsUncheckedCreateInput>
    /**
     * In case the direct_clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<direct_clientsUpdateInput, direct_clientsUncheckedUpdateInput>
  }

  /**
   * direct_clients delete
   */
  export type direct_clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
    /**
     * Filter which direct_clients to delete.
     */
    where: direct_clientsWhereUniqueInput
  }

  /**
   * direct_clients deleteMany
   */
  export type direct_clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which direct_clients to delete
     */
    where?: direct_clientsWhereInput
    /**
     * Limit how many direct_clients to delete.
     */
    limit?: number
  }

  /**
   * direct_clients.sales
   */
  export type direct_clients$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * direct_clients without action
   */
  export type direct_clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direct_clients
     */
    select?: direct_clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direct_clients
     */
    omit?: direct_clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direct_clientsInclude<ExtArgs> | null
  }


  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    full_name: string | null
    address: string | null
    phone: string | null
    birthdate: Date | null
    created_at: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    full_name: string | null
    address: string | null
    phone: string | null
    birthdate: Date | null
    created_at: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    account_id: number
    full_name: number
    address: number
    phone: number
    birthdate: number
    created_at: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type ProfilesSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    account_id?: true
    full_name?: true
    address?: true
    phone?: true
    birthdate?: true
    created_at?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    account_id?: true
    full_name?: true
    address?: true
    phone?: true
    birthdate?: true
    created_at?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    account_id?: true
    full_name?: true
    address?: true
    phone?: true
    birthdate?: true
    created_at?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: number
    account_id: number
    full_name: string | null
    address: string | null
    phone: string | null
    birthdate: Date | null
    created_at: Date | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    full_name?: boolean
    address?: boolean
    phone?: boolean
    birthdate?: boolean
    created_at?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>



  export type profilesSelectScalar = {
    id?: boolean
    account_id?: boolean
    full_name?: boolean
    address?: boolean
    phone?: boolean
    birthdate?: boolean
    created_at?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "full_name" | "address" | "phone" | "birthdate" | "created_at", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: number
      full_name: string | null
      address: string | null
      phone: string | null
      birthdate: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'Int'>
    readonly account_id: FieldRef<"profiles", 'Int'>
    readonly full_name: FieldRef<"profiles", 'String'>
    readonly address: FieldRef<"profiles", 'String'>
    readonly phone: FieldRef<"profiles", 'String'>
    readonly birthdate: FieldRef<"profiles", 'DateTime'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model registers_test
   */

  export type AggregateRegisters_test = {
    _count: Registers_testCountAggregateOutputType | null
    _avg: Registers_testAvgAggregateOutputType | null
    _sum: Registers_testSumAggregateOutputType | null
    _min: Registers_testMinAggregateOutputType | null
    _max: Registers_testMaxAggregateOutputType | null
  }

  export type Registers_testAvgAggregateOutputType = {
    id_register: number | null
    edad: number | null
    dinero_en_cuenta: Decimal | null
  }

  export type Registers_testSumAggregateOutputType = {
    id_register: number | null
    edad: number | null
    dinero_en_cuenta: Decimal | null
  }

  export type Registers_testMinAggregateOutputType = {
    id_register: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    numero: string | null
    correo: string | null
    genero: $Enums.registers_test_genero | null
    edad: number | null
    dinero_en_cuenta: Decimal | null
    fecha_registro: Date | null
  }

  export type Registers_testMaxAggregateOutputType = {
    id_register: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    numero: string | null
    correo: string | null
    genero: $Enums.registers_test_genero | null
    edad: number | null
    dinero_en_cuenta: Decimal | null
    fecha_registro: Date | null
  }

  export type Registers_testCountAggregateOutputType = {
    id_register: number
    nombre: number
    apellido_paterno: number
    apellido_materno: number
    numero: number
    correo: number
    genero: number
    edad: number
    dinero_en_cuenta: number
    fecha_registro: number
    _all: number
  }


  export type Registers_testAvgAggregateInputType = {
    id_register?: true
    edad?: true
    dinero_en_cuenta?: true
  }

  export type Registers_testSumAggregateInputType = {
    id_register?: true
    edad?: true
    dinero_en_cuenta?: true
  }

  export type Registers_testMinAggregateInputType = {
    id_register?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    numero?: true
    correo?: true
    genero?: true
    edad?: true
    dinero_en_cuenta?: true
    fecha_registro?: true
  }

  export type Registers_testMaxAggregateInputType = {
    id_register?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    numero?: true
    correo?: true
    genero?: true
    edad?: true
    dinero_en_cuenta?: true
    fecha_registro?: true
  }

  export type Registers_testCountAggregateInputType = {
    id_register?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    numero?: true
    correo?: true
    genero?: true
    edad?: true
    dinero_en_cuenta?: true
    fecha_registro?: true
    _all?: true
  }

  export type Registers_testAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registers_test to aggregate.
     */
    where?: registers_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registers_tests to fetch.
     */
    orderBy?: registers_testOrderByWithRelationInput | registers_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registers_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registers_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registers_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registers_tests
    **/
    _count?: true | Registers_testCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Registers_testAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Registers_testSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Registers_testMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Registers_testMaxAggregateInputType
  }

  export type GetRegisters_testAggregateType<T extends Registers_testAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisters_test]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisters_test[P]>
      : GetScalarType<T[P], AggregateRegisters_test[P]>
  }




  export type registers_testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registers_testWhereInput
    orderBy?: registers_testOrderByWithAggregationInput | registers_testOrderByWithAggregationInput[]
    by: Registers_testScalarFieldEnum[] | Registers_testScalarFieldEnum
    having?: registers_testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Registers_testCountAggregateInputType | true
    _avg?: Registers_testAvgAggregateInputType
    _sum?: Registers_testSumAggregateInputType
    _min?: Registers_testMinAggregateInputType
    _max?: Registers_testMaxAggregateInputType
  }

  export type Registers_testGroupByOutputType = {
    id_register: number
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    numero: string | null
    correo: string | null
    genero: $Enums.registers_test_genero | null
    edad: number | null
    dinero_en_cuenta: Decimal | null
    fecha_registro: Date | null
    _count: Registers_testCountAggregateOutputType | null
    _avg: Registers_testAvgAggregateOutputType | null
    _sum: Registers_testSumAggregateOutputType | null
    _min: Registers_testMinAggregateOutputType | null
    _max: Registers_testMaxAggregateOutputType | null
  }

  type GetRegisters_testGroupByPayload<T extends registers_testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Registers_testGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Registers_testGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Registers_testGroupByOutputType[P]>
            : GetScalarType<T[P], Registers_testGroupByOutputType[P]>
        }
      >
    >


  export type registers_testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_register?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    numero?: boolean
    correo?: boolean
    genero?: boolean
    edad?: boolean
    dinero_en_cuenta?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["registers_test"]>



  export type registers_testSelectScalar = {
    id_register?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    numero?: boolean
    correo?: boolean
    genero?: boolean
    edad?: boolean
    dinero_en_cuenta?: boolean
    fecha_registro?: boolean
  }

  export type registers_testOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_register" | "nombre" | "apellido_paterno" | "apellido_materno" | "numero" | "correo" | "genero" | "edad" | "dinero_en_cuenta" | "fecha_registro", ExtArgs["result"]["registers_test"]>

  export type $registers_testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registers_test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_register: number
      nombre: string | null
      apellido_paterno: string | null
      apellido_materno: string | null
      numero: string | null
      correo: string | null
      genero: $Enums.registers_test_genero | null
      edad: number | null
      dinero_en_cuenta: Prisma.Decimal | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["registers_test"]>
    composites: {}
  }

  type registers_testGetPayload<S extends boolean | null | undefined | registers_testDefaultArgs> = $Result.GetResult<Prisma.$registers_testPayload, S>

  type registers_testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<registers_testFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Registers_testCountAggregateInputType | true
    }

  export interface registers_testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registers_test'], meta: { name: 'registers_test' } }
    /**
     * Find zero or one Registers_test that matches the filter.
     * @param {registers_testFindUniqueArgs} args - Arguments to find a Registers_test
     * @example
     * // Get one Registers_test
     * const registers_test = await prisma.registers_test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registers_testFindUniqueArgs>(args: SelectSubset<T, registers_testFindUniqueArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registers_test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {registers_testFindUniqueOrThrowArgs} args - Arguments to find a Registers_test
     * @example
     * // Get one Registers_test
     * const registers_test = await prisma.registers_test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registers_testFindUniqueOrThrowArgs>(args: SelectSubset<T, registers_testFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registers_test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registers_testFindFirstArgs} args - Arguments to find a Registers_test
     * @example
     * // Get one Registers_test
     * const registers_test = await prisma.registers_test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registers_testFindFirstArgs>(args?: SelectSubset<T, registers_testFindFirstArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registers_test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registers_testFindFirstOrThrowArgs} args - Arguments to find a Registers_test
     * @example
     * // Get one Registers_test
     * const registers_test = await prisma.registers_test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registers_testFindFirstOrThrowArgs>(args?: SelectSubset<T, registers_testFindFirstOrThrowArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registers_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registers_testFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registers_tests
     * const registers_tests = await prisma.registers_test.findMany()
     * 
     * // Get first 10 Registers_tests
     * const registers_tests = await prisma.registers_test.findMany({ take: 10 })
     * 
     * // Only select the `id_register`
     * const registers_testWithId_registerOnly = await prisma.registers_test.findMany({ select: { id_register: true } })
     * 
     */
    findMany<T extends registers_testFindManyArgs>(args?: SelectSubset<T, registers_testFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registers_test.
     * @param {registers_testCreateArgs} args - Arguments to create a Registers_test.
     * @example
     * // Create one Registers_test
     * const Registers_test = await prisma.registers_test.create({
     *   data: {
     *     // ... data to create a Registers_test
     *   }
     * })
     * 
     */
    create<T extends registers_testCreateArgs>(args: SelectSubset<T, registers_testCreateArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registers_tests.
     * @param {registers_testCreateManyArgs} args - Arguments to create many Registers_tests.
     * @example
     * // Create many Registers_tests
     * const registers_test = await prisma.registers_test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registers_testCreateManyArgs>(args?: SelectSubset<T, registers_testCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registers_test.
     * @param {registers_testDeleteArgs} args - Arguments to delete one Registers_test.
     * @example
     * // Delete one Registers_test
     * const Registers_test = await prisma.registers_test.delete({
     *   where: {
     *     // ... filter to delete one Registers_test
     *   }
     * })
     * 
     */
    delete<T extends registers_testDeleteArgs>(args: SelectSubset<T, registers_testDeleteArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registers_test.
     * @param {registers_testUpdateArgs} args - Arguments to update one Registers_test.
     * @example
     * // Update one Registers_test
     * const registers_test = await prisma.registers_test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registers_testUpdateArgs>(args: SelectSubset<T, registers_testUpdateArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registers_tests.
     * @param {registers_testDeleteManyArgs} args - Arguments to filter Registers_tests to delete.
     * @example
     * // Delete a few Registers_tests
     * const { count } = await prisma.registers_test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registers_testDeleteManyArgs>(args?: SelectSubset<T, registers_testDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registers_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registers_testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registers_tests
     * const registers_test = await prisma.registers_test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registers_testUpdateManyArgs>(args: SelectSubset<T, registers_testUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registers_test.
     * @param {registers_testUpsertArgs} args - Arguments to update or create a Registers_test.
     * @example
     * // Update or create a Registers_test
     * const registers_test = await prisma.registers_test.upsert({
     *   create: {
     *     // ... data to create a Registers_test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registers_test we want to update
     *   }
     * })
     */
    upsert<T extends registers_testUpsertArgs>(args: SelectSubset<T, registers_testUpsertArgs<ExtArgs>>): Prisma__registers_testClient<$Result.GetResult<Prisma.$registers_testPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registers_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registers_testCountArgs} args - Arguments to filter Registers_tests to count.
     * @example
     * // Count the number of Registers_tests
     * const count = await prisma.registers_test.count({
     *   where: {
     *     // ... the filter for the Registers_tests we want to count
     *   }
     * })
    **/
    count<T extends registers_testCountArgs>(
      args?: Subset<T, registers_testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Registers_testCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registers_test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registers_testAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Registers_testAggregateArgs>(args: Subset<T, Registers_testAggregateArgs>): Prisma.PrismaPromise<GetRegisters_testAggregateType<T>>

    /**
     * Group by Registers_test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registers_testGroupByArgs} args - Group by arguments.
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
      T extends registers_testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registers_testGroupByArgs['orderBy'] }
        : { orderBy?: registers_testGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, registers_testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisters_testGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registers_test model
   */
  readonly fields: registers_testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registers_test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registers_testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the registers_test model
   */
  interface registers_testFieldRefs {
    readonly id_register: FieldRef<"registers_test", 'Int'>
    readonly nombre: FieldRef<"registers_test", 'String'>
    readonly apellido_paterno: FieldRef<"registers_test", 'String'>
    readonly apellido_materno: FieldRef<"registers_test", 'String'>
    readonly numero: FieldRef<"registers_test", 'String'>
    readonly correo: FieldRef<"registers_test", 'String'>
    readonly genero: FieldRef<"registers_test", 'registers_test_genero'>
    readonly edad: FieldRef<"registers_test", 'Int'>
    readonly dinero_en_cuenta: FieldRef<"registers_test", 'Decimal'>
    readonly fecha_registro: FieldRef<"registers_test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * registers_test findUnique
   */
  export type registers_testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * Filter, which registers_test to fetch.
     */
    where: registers_testWhereUniqueInput
  }

  /**
   * registers_test findUniqueOrThrow
   */
  export type registers_testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * Filter, which registers_test to fetch.
     */
    where: registers_testWhereUniqueInput
  }

  /**
   * registers_test findFirst
   */
  export type registers_testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * Filter, which registers_test to fetch.
     */
    where?: registers_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registers_tests to fetch.
     */
    orderBy?: registers_testOrderByWithRelationInput | registers_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registers_tests.
     */
    cursor?: registers_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registers_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registers_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registers_tests.
     */
    distinct?: Registers_testScalarFieldEnum | Registers_testScalarFieldEnum[]
  }

  /**
   * registers_test findFirstOrThrow
   */
  export type registers_testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * Filter, which registers_test to fetch.
     */
    where?: registers_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registers_tests to fetch.
     */
    orderBy?: registers_testOrderByWithRelationInput | registers_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registers_tests.
     */
    cursor?: registers_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registers_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registers_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registers_tests.
     */
    distinct?: Registers_testScalarFieldEnum | Registers_testScalarFieldEnum[]
  }

  /**
   * registers_test findMany
   */
  export type registers_testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * Filter, which registers_tests to fetch.
     */
    where?: registers_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registers_tests to fetch.
     */
    orderBy?: registers_testOrderByWithRelationInput | registers_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registers_tests.
     */
    cursor?: registers_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registers_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registers_tests.
     */
    skip?: number
    distinct?: Registers_testScalarFieldEnum | Registers_testScalarFieldEnum[]
  }

  /**
   * registers_test create
   */
  export type registers_testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * The data needed to create a registers_test.
     */
    data?: XOR<registers_testCreateInput, registers_testUncheckedCreateInput>
  }

  /**
   * registers_test createMany
   */
  export type registers_testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registers_tests.
     */
    data: registers_testCreateManyInput | registers_testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registers_test update
   */
  export type registers_testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * The data needed to update a registers_test.
     */
    data: XOR<registers_testUpdateInput, registers_testUncheckedUpdateInput>
    /**
     * Choose, which registers_test to update.
     */
    where: registers_testWhereUniqueInput
  }

  /**
   * registers_test updateMany
   */
  export type registers_testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registers_tests.
     */
    data: XOR<registers_testUpdateManyMutationInput, registers_testUncheckedUpdateManyInput>
    /**
     * Filter which registers_tests to update
     */
    where?: registers_testWhereInput
    /**
     * Limit how many registers_tests to update.
     */
    limit?: number
  }

  /**
   * registers_test upsert
   */
  export type registers_testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * The filter to search for the registers_test to update in case it exists.
     */
    where: registers_testWhereUniqueInput
    /**
     * In case the registers_test found by the `where` argument doesn't exist, create a new registers_test with this data.
     */
    create: XOR<registers_testCreateInput, registers_testUncheckedCreateInput>
    /**
     * In case the registers_test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registers_testUpdateInput, registers_testUncheckedUpdateInput>
  }

  /**
   * registers_test delete
   */
  export type registers_testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
    /**
     * Filter which registers_test to delete.
     */
    where: registers_testWhereUniqueInput
  }

  /**
   * registers_test deleteMany
   */
  export type registers_testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registers_tests to delete
     */
    where?: registers_testWhereInput
    /**
     * Limit how many registers_tests to delete.
     */
    limit?: number
  }

  /**
   * registers_test without action
   */
  export type registers_testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registers_test
     */
    select?: registers_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registers_test
     */
    omit?: registers_testOmit<ExtArgs> | null
  }


  /**
   * Model sale_details
   */

  export type AggregateSale_details = {
    _count: Sale_detailsCountAggregateOutputType | null
    _avg: Sale_detailsAvgAggregateOutputType | null
    _sum: Sale_detailsSumAggregateOutputType | null
    _min: Sale_detailsMinAggregateOutputType | null
    _max: Sale_detailsMaxAggregateOutputType | null
  }

  export type Sale_detailsAvgAggregateOutputType = {
    id: number | null
    sale_id: number | null
    article_id: number | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Sale_detailsSumAggregateOutputType = {
    id: number | null
    sale_id: number | null
    article_id: number | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Sale_detailsMinAggregateOutputType = {
    id: number | null
    sale_id: number | null
    article_id: number | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Sale_detailsMaxAggregateOutputType = {
    id: number | null
    sale_id: number | null
    article_id: number | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Sale_detailsCountAggregateOutputType = {
    id: number
    sale_id: number
    article_id: number
    quantity: number
    unit_price: number
    _all: number
  }


  export type Sale_detailsAvgAggregateInputType = {
    id?: true
    sale_id?: true
    article_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Sale_detailsSumAggregateInputType = {
    id?: true
    sale_id?: true
    article_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Sale_detailsMinAggregateInputType = {
    id?: true
    sale_id?: true
    article_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Sale_detailsMaxAggregateInputType = {
    id?: true
    sale_id?: true
    article_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Sale_detailsCountAggregateInputType = {
    id?: true
    sale_id?: true
    article_id?: true
    quantity?: true
    unit_price?: true
    _all?: true
  }

  export type Sale_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sale_details to aggregate.
     */
    where?: sale_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sale_details to fetch.
     */
    orderBy?: sale_detailsOrderByWithRelationInput | sale_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sale_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sale_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sale_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sale_details
    **/
    _count?: true | Sale_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sale_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sale_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sale_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sale_detailsMaxAggregateInputType
  }

  export type GetSale_detailsAggregateType<T extends Sale_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateSale_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale_details[P]>
      : GetScalarType<T[P], AggregateSale_details[P]>
  }




  export type sale_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sale_detailsWhereInput
    orderBy?: sale_detailsOrderByWithAggregationInput | sale_detailsOrderByWithAggregationInput[]
    by: Sale_detailsScalarFieldEnum[] | Sale_detailsScalarFieldEnum
    having?: sale_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sale_detailsCountAggregateInputType | true
    _avg?: Sale_detailsAvgAggregateInputType
    _sum?: Sale_detailsSumAggregateInputType
    _min?: Sale_detailsMinAggregateInputType
    _max?: Sale_detailsMaxAggregateInputType
  }

  export type Sale_detailsGroupByOutputType = {
    id: number
    sale_id: number
    article_id: number
    quantity: number
    unit_price: Decimal
    _count: Sale_detailsCountAggregateOutputType | null
    _avg: Sale_detailsAvgAggregateOutputType | null
    _sum: Sale_detailsSumAggregateOutputType | null
    _min: Sale_detailsMinAggregateOutputType | null
    _max: Sale_detailsMaxAggregateOutputType | null
  }

  type GetSale_detailsGroupByPayload<T extends sale_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sale_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sale_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sale_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Sale_detailsGroupByOutputType[P]>
        }
      >
    >


  export type sale_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sale_id?: boolean
    article_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    sales?: boolean | salesDefaultArgs<ExtArgs>
    articles?: boolean | articlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale_details"]>



  export type sale_detailsSelectScalar = {
    id?: boolean
    sale_id?: boolean
    article_id?: boolean
    quantity?: boolean
    unit_price?: boolean
  }

  export type sale_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sale_id" | "article_id" | "quantity" | "unit_price", ExtArgs["result"]["sale_details"]>
  export type sale_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | salesDefaultArgs<ExtArgs>
    articles?: boolean | articlesDefaultArgs<ExtArgs>
  }

  export type $sale_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sale_details"
    objects: {
      sales: Prisma.$salesPayload<ExtArgs>
      articles: Prisma.$articlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sale_id: number
      article_id: number
      quantity: number
      unit_price: Prisma.Decimal
    }, ExtArgs["result"]["sale_details"]>
    composites: {}
  }

  type sale_detailsGetPayload<S extends boolean | null | undefined | sale_detailsDefaultArgs> = $Result.GetResult<Prisma.$sale_detailsPayload, S>

  type sale_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sale_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sale_detailsCountAggregateInputType | true
    }

  export interface sale_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sale_details'], meta: { name: 'sale_details' } }
    /**
     * Find zero or one Sale_details that matches the filter.
     * @param {sale_detailsFindUniqueArgs} args - Arguments to find a Sale_details
     * @example
     * // Get one Sale_details
     * const sale_details = await prisma.sale_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sale_detailsFindUniqueArgs>(args: SelectSubset<T, sale_detailsFindUniqueArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sale_detailsFindUniqueOrThrowArgs} args - Arguments to find a Sale_details
     * @example
     * // Get one Sale_details
     * const sale_details = await prisma.sale_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sale_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, sale_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sale_detailsFindFirstArgs} args - Arguments to find a Sale_details
     * @example
     * // Get one Sale_details
     * const sale_details = await prisma.sale_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sale_detailsFindFirstArgs>(args?: SelectSubset<T, sale_detailsFindFirstArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sale_detailsFindFirstOrThrowArgs} args - Arguments to find a Sale_details
     * @example
     * // Get one Sale_details
     * const sale_details = await prisma.sale_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sale_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, sale_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sale_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sale_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sale_details
     * const sale_details = await prisma.sale_details.findMany()
     * 
     * // Get first 10 Sale_details
     * const sale_details = await prisma.sale_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sale_detailsWithIdOnly = await prisma.sale_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sale_detailsFindManyArgs>(args?: SelectSubset<T, sale_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale_details.
     * @param {sale_detailsCreateArgs} args - Arguments to create a Sale_details.
     * @example
     * // Create one Sale_details
     * const Sale_details = await prisma.sale_details.create({
     *   data: {
     *     // ... data to create a Sale_details
     *   }
     * })
     * 
     */
    create<T extends sale_detailsCreateArgs>(args: SelectSubset<T, sale_detailsCreateArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sale_details.
     * @param {sale_detailsCreateManyArgs} args - Arguments to create many Sale_details.
     * @example
     * // Create many Sale_details
     * const sale_details = await prisma.sale_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sale_detailsCreateManyArgs>(args?: SelectSubset<T, sale_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sale_details.
     * @param {sale_detailsDeleteArgs} args - Arguments to delete one Sale_details.
     * @example
     * // Delete one Sale_details
     * const Sale_details = await prisma.sale_details.delete({
     *   where: {
     *     // ... filter to delete one Sale_details
     *   }
     * })
     * 
     */
    delete<T extends sale_detailsDeleteArgs>(args: SelectSubset<T, sale_detailsDeleteArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale_details.
     * @param {sale_detailsUpdateArgs} args - Arguments to update one Sale_details.
     * @example
     * // Update one Sale_details
     * const sale_details = await prisma.sale_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sale_detailsUpdateArgs>(args: SelectSubset<T, sale_detailsUpdateArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sale_details.
     * @param {sale_detailsDeleteManyArgs} args - Arguments to filter Sale_details to delete.
     * @example
     * // Delete a few Sale_details
     * const { count } = await prisma.sale_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sale_detailsDeleteManyArgs>(args?: SelectSubset<T, sale_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sale_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sale_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sale_details
     * const sale_details = await prisma.sale_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sale_detailsUpdateManyArgs>(args: SelectSubset<T, sale_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale_details.
     * @param {sale_detailsUpsertArgs} args - Arguments to update or create a Sale_details.
     * @example
     * // Update or create a Sale_details
     * const sale_details = await prisma.sale_details.upsert({
     *   create: {
     *     // ... data to create a Sale_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale_details we want to update
     *   }
     * })
     */
    upsert<T extends sale_detailsUpsertArgs>(args: SelectSubset<T, sale_detailsUpsertArgs<ExtArgs>>): Prisma__sale_detailsClient<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sale_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sale_detailsCountArgs} args - Arguments to filter Sale_details to count.
     * @example
     * // Count the number of Sale_details
     * const count = await prisma.sale_details.count({
     *   where: {
     *     // ... the filter for the Sale_details we want to count
     *   }
     * })
    **/
    count<T extends sale_detailsCountArgs>(
      args?: Subset<T, sale_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sale_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sale_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sale_detailsAggregateArgs>(args: Subset<T, Sale_detailsAggregateArgs>): Prisma.PrismaPromise<GetSale_detailsAggregateType<T>>

    /**
     * Group by Sale_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sale_detailsGroupByArgs} args - Group by arguments.
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
      T extends sale_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sale_detailsGroupByArgs['orderBy'] }
        : { orderBy?: sale_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sale_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSale_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sale_details model
   */
  readonly fields: sale_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sale_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sale_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends salesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, salesDefaultArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articles<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sale_details model
   */
  interface sale_detailsFieldRefs {
    readonly id: FieldRef<"sale_details", 'Int'>
    readonly sale_id: FieldRef<"sale_details", 'Int'>
    readonly article_id: FieldRef<"sale_details", 'Int'>
    readonly quantity: FieldRef<"sale_details", 'Int'>
    readonly unit_price: FieldRef<"sale_details", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * sale_details findUnique
   */
  export type sale_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * Filter, which sale_details to fetch.
     */
    where: sale_detailsWhereUniqueInput
  }

  /**
   * sale_details findUniqueOrThrow
   */
  export type sale_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * Filter, which sale_details to fetch.
     */
    where: sale_detailsWhereUniqueInput
  }

  /**
   * sale_details findFirst
   */
  export type sale_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * Filter, which sale_details to fetch.
     */
    where?: sale_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sale_details to fetch.
     */
    orderBy?: sale_detailsOrderByWithRelationInput | sale_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sale_details.
     */
    cursor?: sale_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sale_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sale_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sale_details.
     */
    distinct?: Sale_detailsScalarFieldEnum | Sale_detailsScalarFieldEnum[]
  }

  /**
   * sale_details findFirstOrThrow
   */
  export type sale_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * Filter, which sale_details to fetch.
     */
    where?: sale_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sale_details to fetch.
     */
    orderBy?: sale_detailsOrderByWithRelationInput | sale_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sale_details.
     */
    cursor?: sale_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sale_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sale_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sale_details.
     */
    distinct?: Sale_detailsScalarFieldEnum | Sale_detailsScalarFieldEnum[]
  }

  /**
   * sale_details findMany
   */
  export type sale_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * Filter, which sale_details to fetch.
     */
    where?: sale_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sale_details to fetch.
     */
    orderBy?: sale_detailsOrderByWithRelationInput | sale_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sale_details.
     */
    cursor?: sale_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sale_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sale_details.
     */
    skip?: number
    distinct?: Sale_detailsScalarFieldEnum | Sale_detailsScalarFieldEnum[]
  }

  /**
   * sale_details create
   */
  export type sale_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a sale_details.
     */
    data: XOR<sale_detailsCreateInput, sale_detailsUncheckedCreateInput>
  }

  /**
   * sale_details createMany
   */
  export type sale_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sale_details.
     */
    data: sale_detailsCreateManyInput | sale_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sale_details update
   */
  export type sale_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a sale_details.
     */
    data: XOR<sale_detailsUpdateInput, sale_detailsUncheckedUpdateInput>
    /**
     * Choose, which sale_details to update.
     */
    where: sale_detailsWhereUniqueInput
  }

  /**
   * sale_details updateMany
   */
  export type sale_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sale_details.
     */
    data: XOR<sale_detailsUpdateManyMutationInput, sale_detailsUncheckedUpdateManyInput>
    /**
     * Filter which sale_details to update
     */
    where?: sale_detailsWhereInput
    /**
     * Limit how many sale_details to update.
     */
    limit?: number
  }

  /**
   * sale_details upsert
   */
  export type sale_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the sale_details to update in case it exists.
     */
    where: sale_detailsWhereUniqueInput
    /**
     * In case the sale_details found by the `where` argument doesn't exist, create a new sale_details with this data.
     */
    create: XOR<sale_detailsCreateInput, sale_detailsUncheckedCreateInput>
    /**
     * In case the sale_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sale_detailsUpdateInput, sale_detailsUncheckedUpdateInput>
  }

  /**
   * sale_details delete
   */
  export type sale_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    /**
     * Filter which sale_details to delete.
     */
    where: sale_detailsWhereUniqueInput
  }

  /**
   * sale_details deleteMany
   */
  export type sale_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sale_details to delete
     */
    where?: sale_detailsWhereInput
    /**
     * Limit how many sale_details to delete.
     */
    limit?: number
  }

  /**
   * sale_details without action
   */
  export type sale_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
  }


  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
    total: Decimal | null
  }

  export type SalesSumAggregateOutputType = {
    id: number | null
    client_id: number | null
    total: Decimal | null
  }

  export type SalesMinAggregateOutputType = {
    id: number | null
    client_id: number | null
    sale_date: Date | null
    status: $Enums.sales_status | null
    total: Decimal | null
  }

  export type SalesMaxAggregateOutputType = {
    id: number | null
    client_id: number | null
    sale_date: Date | null
    status: $Enums.sales_status | null
    total: Decimal | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    client_id: number
    sale_date: number
    status: number
    total: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    id?: true
    client_id?: true
    total?: true
  }

  export type SalesSumAggregateInputType = {
    id?: true
    client_id?: true
    total?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    client_id?: true
    sale_date?: true
    status?: true
    total?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    client_id?: true
    sale_date?: true
    status?: true
    total?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    client_id?: true
    sale_date?: true
    status?: true
    total?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: number
    client_id: number
    sale_date: Date | null
    status: $Enums.sales_status | null
    total: Decimal | null
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    sale_date?: boolean
    status?: boolean
    total?: boolean
    sale_details?: boolean | sales$sale_detailsArgs<ExtArgs>
    direct_clients?: boolean | direct_clientsDefaultArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>



  export type salesSelectScalar = {
    id?: boolean
    client_id?: boolean
    sale_date?: boolean
    status?: boolean
    total?: boolean
  }

  export type salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "sale_date" | "status" | "total", ExtArgs["result"]["sales"]>
  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale_details?: boolean | sales$sale_detailsArgs<ExtArgs>
    direct_clients?: boolean | direct_clientsDefaultArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales"
    objects: {
      sale_details: Prisma.$sale_detailsPayload<ExtArgs>[]
      direct_clients: Prisma.$direct_clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: number
      sale_date: Date | null
      status: $Enums.sales_status | null
      total: Prisma.Decimal | null
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<Prisma.$salesPayload, S>

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales'], meta: { name: 'sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salesFindUniqueArgs>(args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs>(args: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salesFindFirstArgs>(args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs>(args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salesFindManyArgs>(args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends salesCreateArgs>(args: SelectSubset<T, salesCreateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {salesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salesCreateManyArgs>(args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends salesDeleteArgs>(args: SelectSubset<T, salesDeleteArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salesUpdateArgs>(args: SelectSubset<T, salesUpdateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salesDeleteManyArgs>(args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salesUpdateManyArgs>(args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends salesUpsertArgs>(args: SelectSubset<T, salesUpsertArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
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
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales model
   */
  readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale_details<T extends sales$sale_detailsArgs<ExtArgs> = {}>(args?: Subset<T, sales$sale_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sale_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    direct_clients<T extends direct_clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, direct_clientsDefaultArgs<ExtArgs>>): Prisma__direct_clientsClient<$Result.GetResult<Prisma.$direct_clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<"sales", 'Int'>
    readonly client_id: FieldRef<"sales", 'Int'>
    readonly sale_date: FieldRef<"sales", 'DateTime'>
    readonly status: FieldRef<"sales", 'sales_status'>
    readonly total: FieldRef<"sales", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>
  }

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>
  }

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sales.sale_details
   */
  export type sales$sale_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sale_details
     */
    select?: sale_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sale_details
     */
    omit?: sale_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sale_detailsInclude<ExtArgs> | null
    where?: sale_detailsWhereInput
    orderBy?: sale_detailsOrderByWithRelationInput | sale_detailsOrderByWithRelationInput[]
    cursor?: sale_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sale_detailsScalarFieldEnum | Sale_detailsScalarFieldEnum[]
  }

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
  }


  /**
   * Model suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    id: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    id: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: number | null
    name: string | null
    contact_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    contact_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    name: number
    contact_name: number
    email: number
    phone: number
    address: number
    created_at: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    id?: true
  }

  export type SuppliersSumAggregateInputType = {
    id?: true
  }

  export type SuppliersMinAggregateInputType = {
    id?: true
    name?: true
    contact_name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    name?: true
    contact_name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    name?: true
    contact_name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to aggregate.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type suppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithAggregationInput | suppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: suppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    id: number
    name: string
    contact_name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends suppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type suppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    articles?: boolean | suppliers$articlesArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>



  export type suppliersSelectScalar = {
    id?: boolean
    name?: boolean
    contact_name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
  }

  export type suppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contact_name" | "email" | "phone" | "address" | "created_at", ExtArgs["result"]["suppliers"]>
  export type suppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | suppliers$articlesArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $suppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suppliers"
    objects: {
      articles: Prisma.$articlesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      contact_name: string | null
      email: string | null
      phone: string | null
      address: string | null
      created_at: Date | null
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type suppliersGetPayload<S extends boolean | null | undefined | suppliersDefaultArgs> = $Result.GetResult<Prisma.$suppliersPayload, S>

  type suppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface suppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suppliers'], meta: { name: 'suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {suppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suppliersFindUniqueArgs>(args: SelectSubset<T, suppliersFindUniqueArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, suppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suppliersFindFirstArgs>(args?: SelectSubset<T, suppliersFindFirstArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, suppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends suppliersFindManyArgs>(args?: SelectSubset<T, suppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {suppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends suppliersCreateArgs>(args: SelectSubset<T, suppliersCreateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {suppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suppliersCreateManyArgs>(args?: SelectSubset<T, suppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Suppliers.
     * @param {suppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends suppliersDeleteArgs>(args: SelectSubset<T, suppliersDeleteArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {suppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suppliersUpdateArgs>(args: SelectSubset<T, suppliersUpdateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {suppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suppliersDeleteManyArgs>(args?: SelectSubset<T, suppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suppliersUpdateManyArgs>(args: SelectSubset<T, suppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Suppliers.
     * @param {suppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends suppliersUpsertArgs>(args: SelectSubset<T, suppliersUpsertArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends suppliersCountArgs>(
      args?: Subset<T, suppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersGroupByArgs} args - Group by arguments.
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
      T extends suppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suppliersGroupByArgs['orderBy'] }
        : { orderBy?: suppliersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, suppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suppliers model
   */
  readonly fields: suppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends suppliers$articlesArgs<ExtArgs> = {}>(args?: Subset<T, suppliers$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the suppliers model
   */
  interface suppliersFieldRefs {
    readonly id: FieldRef<"suppliers", 'Int'>
    readonly name: FieldRef<"suppliers", 'String'>
    readonly contact_name: FieldRef<"suppliers", 'String'>
    readonly email: FieldRef<"suppliers", 'String'>
    readonly phone: FieldRef<"suppliers", 'String'>
    readonly address: FieldRef<"suppliers", 'String'>
    readonly created_at: FieldRef<"suppliers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * suppliers findUnique
   */
  export type suppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findUniqueOrThrow
   */
  export type suppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findFirst
   */
  export type suppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findFirstOrThrow
   */
  export type suppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findMany
   */
  export type suppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers create
   */
  export type suppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a suppliers.
     */
    data: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
  }

  /**
   * suppliers createMany
   */
  export type suppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suppliers update
   */
  export type suppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a suppliers.
     */
    data: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
    /**
     * Choose, which suppliers to update.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers updateMany
   */
  export type suppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers upsert
   */
  export type suppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the suppliers to update in case it exists.
     */
    where: suppliersWhereUniqueInput
    /**
     * In case the suppliers found by the `where` argument doesn't exist, create a new suppliers with this data.
     */
    create: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
    /**
     * In case the suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
  }

  /**
   * suppliers delete
   */
  export type suppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter which suppliers to delete.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers deleteMany
   */
  export type suppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * suppliers.articles
   */
  export type suppliers$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    cursor?: articlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * suppliers without action
   */
  export type suppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
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


  export const AccountsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    supplier_id: 'supplier_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const Direct_clientsScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    created_at: 'created_at'
  };

  export type Direct_clientsScalarFieldEnum = (typeof Direct_clientsScalarFieldEnum)[keyof typeof Direct_clientsScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    full_name: 'full_name',
    address: 'address',
    phone: 'phone',
    birthdate: 'birthdate',
    created_at: 'created_at'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const Registers_testScalarFieldEnum: {
    id_register: 'id_register',
    nombre: 'nombre',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno',
    numero: 'numero',
    correo: 'correo',
    genero: 'genero',
    edad: 'edad',
    dinero_en_cuenta: 'dinero_en_cuenta',
    fecha_registro: 'fecha_registro'
  };

  export type Registers_testScalarFieldEnum = (typeof Registers_testScalarFieldEnum)[keyof typeof Registers_testScalarFieldEnum]


  export const Sale_detailsScalarFieldEnum: {
    id: 'id',
    sale_id: 'sale_id',
    article_id: 'article_id',
    quantity: 'quantity',
    unit_price: 'unit_price'
  };

  export type Sale_detailsScalarFieldEnum = (typeof Sale_detailsScalarFieldEnum)[keyof typeof Sale_detailsScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    sale_date: 'sale_date',
    status: 'status',
    total: 'total'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact_name: 'contact_name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    created_at: 'created_at'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const accountsOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type accountsOrderByRelevanceFieldEnum = (typeof accountsOrderByRelevanceFieldEnum)[keyof typeof accountsOrderByRelevanceFieldEnum]


  export const articlesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type articlesOrderByRelevanceFieldEnum = (typeof articlesOrderByRelevanceFieldEnum)[keyof typeof articlesOrderByRelevanceFieldEnum]


  export const direct_clientsOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type direct_clientsOrderByRelevanceFieldEnum = (typeof direct_clientsOrderByRelevanceFieldEnum)[keyof typeof direct_clientsOrderByRelevanceFieldEnum]


  export const profilesOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    address: 'address',
    phone: 'phone'
  };

  export type profilesOrderByRelevanceFieldEnum = (typeof profilesOrderByRelevanceFieldEnum)[keyof typeof profilesOrderByRelevanceFieldEnum]


  export const registers_testOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno',
    numero: 'numero',
    correo: 'correo'
  };

  export type registers_testOrderByRelevanceFieldEnum = (typeof registers_testOrderByRelevanceFieldEnum)[keyof typeof registers_testOrderByRelevanceFieldEnum]


  export const suppliersOrderByRelevanceFieldEnum: {
    name: 'name',
    contact_name: 'contact_name',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type suppliersOrderByRelevanceFieldEnum = (typeof suppliersOrderByRelevanceFieldEnum)[keyof typeof suppliersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'registers_test_genero'
   */
  export type Enumregisters_test_generoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'registers_test_genero'>
    


  /**
   * Reference to a field of type 'sales_status'
   */
  export type Enumsales_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sales_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: IntFilter<"accounts"> | number
    username?: StringFilter<"accounts"> | string
    email?: StringFilter<"accounts"> | string
    password_hash?: StringFilter<"accounts"> | string
    is_active?: BoolNullableFilter<"accounts"> | boolean | null
    created_at?: DateTimeNullableFilter<"accounts"> | Date | string | null
    profiles?: ProfilesListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    profiles?: profilesOrderByRelationAggregateInput
    _relevance?: accountsOrderByRelevanceInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    password_hash?: StringFilter<"accounts"> | string
    is_active?: BoolNullableFilter<"accounts"> | boolean | null
    created_at?: DateTimeNullableFilter<"accounts"> | Date | string | null
    profiles?: ProfilesListRelationFilter
  }, "id" | "username" | "email">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"accounts"> | number
    username?: StringWithAggregatesFilter<"accounts"> | string
    email?: StringWithAggregatesFilter<"accounts"> | string
    password_hash?: StringWithAggregatesFilter<"accounts"> | string
    is_active?: BoolNullableWithAggregatesFilter<"accounts"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
  }

  export type articlesWhereInput = {
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    id?: IntFilter<"articles"> | number
    supplier_id?: IntNullableFilter<"articles"> | number | null
    name?: StringFilter<"articles"> | string
    description?: StringNullableFilter<"articles"> | string | null
    price?: DecimalFilter<"articles"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"articles"> | number | null
    is_active?: BoolNullableFilter<"articles"> | boolean | null
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    suppliers?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    sale_details?: Sale_detailsListRelationFilter
  }

  export type articlesOrderByWithRelationInput = {
    id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    suppliers?: suppliersOrderByWithRelationInput
    sale_details?: sale_detailsOrderByRelationAggregateInput
    _relevance?: articlesOrderByRelevanceInput
  }

  export type articlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    supplier_id?: IntNullableFilter<"articles"> | number | null
    name?: StringFilter<"articles"> | string
    description?: StringNullableFilter<"articles"> | string | null
    price?: DecimalFilter<"articles"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"articles"> | number | null
    is_active?: BoolNullableFilter<"articles"> | boolean | null
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    suppliers?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    sale_details?: Sale_detailsListRelationFilter
  }, "id">

  export type articlesOrderByWithAggregationInput = {
    id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: articlesCountOrderByAggregateInput
    _avg?: articlesAvgOrderByAggregateInput
    _max?: articlesMaxOrderByAggregateInput
    _min?: articlesMinOrderByAggregateInput
    _sum?: articlesSumOrderByAggregateInput
  }

  export type articlesScalarWhereWithAggregatesInput = {
    AND?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    OR?: articlesScalarWhereWithAggregatesInput[]
    NOT?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"articles"> | number
    supplier_id?: IntNullableWithAggregatesFilter<"articles"> | number | null
    name?: StringWithAggregatesFilter<"articles"> | string
    description?: StringNullableWithAggregatesFilter<"articles"> | string | null
    price?: DecimalWithAggregatesFilter<"articles"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableWithAggregatesFilter<"articles"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"articles"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"articles"> | Date | string | null
  }

  export type direct_clientsWhereInput = {
    AND?: direct_clientsWhereInput | direct_clientsWhereInput[]
    OR?: direct_clientsWhereInput[]
    NOT?: direct_clientsWhereInput | direct_clientsWhereInput[]
    id?: IntFilter<"direct_clients"> | number
    full_name?: StringFilter<"direct_clients"> | string
    email?: StringNullableFilter<"direct_clients"> | string | null
    phone?: StringNullableFilter<"direct_clients"> | string | null
    address?: StringNullableFilter<"direct_clients"> | string | null
    created_at?: DateTimeNullableFilter<"direct_clients"> | Date | string | null
    sales?: SalesListRelationFilter
  }

  export type direct_clientsOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    sales?: salesOrderByRelationAggregateInput
    _relevance?: direct_clientsOrderByRelevanceInput
  }

  export type direct_clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: direct_clientsWhereInput | direct_clientsWhereInput[]
    OR?: direct_clientsWhereInput[]
    NOT?: direct_clientsWhereInput | direct_clientsWhereInput[]
    full_name?: StringFilter<"direct_clients"> | string
    email?: StringNullableFilter<"direct_clients"> | string | null
    phone?: StringNullableFilter<"direct_clients"> | string | null
    address?: StringNullableFilter<"direct_clients"> | string | null
    created_at?: DateTimeNullableFilter<"direct_clients"> | Date | string | null
    sales?: SalesListRelationFilter
  }, "id">

  export type direct_clientsOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: direct_clientsCountOrderByAggregateInput
    _avg?: direct_clientsAvgOrderByAggregateInput
    _max?: direct_clientsMaxOrderByAggregateInput
    _min?: direct_clientsMinOrderByAggregateInput
    _sum?: direct_clientsSumOrderByAggregateInput
  }

  export type direct_clientsScalarWhereWithAggregatesInput = {
    AND?: direct_clientsScalarWhereWithAggregatesInput | direct_clientsScalarWhereWithAggregatesInput[]
    OR?: direct_clientsScalarWhereWithAggregatesInput[]
    NOT?: direct_clientsScalarWhereWithAggregatesInput | direct_clientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"direct_clients"> | number
    full_name?: StringWithAggregatesFilter<"direct_clients"> | string
    email?: StringNullableWithAggregatesFilter<"direct_clients"> | string | null
    phone?: StringNullableWithAggregatesFilter<"direct_clients"> | string | null
    address?: StringNullableWithAggregatesFilter<"direct_clients"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"direct_clients"> | Date | string | null
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: IntFilter<"profiles"> | number
    account_id?: IntFilter<"profiles"> | number
    full_name?: StringNullableFilter<"profiles"> | string | null
    address?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    birthdate?: DateTimeNullableFilter<"profiles"> | Date | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    accounts?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    accounts?: accountsOrderByWithRelationInput
    _relevance?: profilesOrderByRelevanceInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    account_id?: IntFilter<"profiles"> | number
    full_name?: StringNullableFilter<"profiles"> | string | null
    address?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    birthdate?: DateTimeNullableFilter<"profiles"> | Date | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    accounts?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }, "id">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: profilesCountOrderByAggregateInput
    _avg?: profilesAvgOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
    _sum?: profilesSumOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profiles"> | number
    account_id?: IntWithAggregatesFilter<"profiles"> | number
    full_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    address?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    phone?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
  }

  export type registers_testWhereInput = {
    AND?: registers_testWhereInput | registers_testWhereInput[]
    OR?: registers_testWhereInput[]
    NOT?: registers_testWhereInput | registers_testWhereInput[]
    id_register?: IntFilter<"registers_test"> | number
    nombre?: StringNullableFilter<"registers_test"> | string | null
    apellido_paterno?: StringNullableFilter<"registers_test"> | string | null
    apellido_materno?: StringNullableFilter<"registers_test"> | string | null
    numero?: StringNullableFilter<"registers_test"> | string | null
    correo?: StringNullableFilter<"registers_test"> | string | null
    genero?: Enumregisters_test_generoNullableFilter<"registers_test"> | $Enums.registers_test_genero | null
    edad?: IntNullableFilter<"registers_test"> | number | null
    dinero_en_cuenta?: DecimalNullableFilter<"registers_test"> | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: DateTimeNullableFilter<"registers_test"> | Date | string | null
  }

  export type registers_testOrderByWithRelationInput = {
    id_register?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido_paterno?: SortOrderInput | SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    edad?: SortOrderInput | SortOrder
    dinero_en_cuenta?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _relevance?: registers_testOrderByRelevanceInput
  }

  export type registers_testWhereUniqueInput = Prisma.AtLeast<{
    id_register?: number
    AND?: registers_testWhereInput | registers_testWhereInput[]
    OR?: registers_testWhereInput[]
    NOT?: registers_testWhereInput | registers_testWhereInput[]
    nombre?: StringNullableFilter<"registers_test"> | string | null
    apellido_paterno?: StringNullableFilter<"registers_test"> | string | null
    apellido_materno?: StringNullableFilter<"registers_test"> | string | null
    numero?: StringNullableFilter<"registers_test"> | string | null
    correo?: StringNullableFilter<"registers_test"> | string | null
    genero?: Enumregisters_test_generoNullableFilter<"registers_test"> | $Enums.registers_test_genero | null
    edad?: IntNullableFilter<"registers_test"> | number | null
    dinero_en_cuenta?: DecimalNullableFilter<"registers_test"> | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: DateTimeNullableFilter<"registers_test"> | Date | string | null
  }, "id_register">

  export type registers_testOrderByWithAggregationInput = {
    id_register?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido_paterno?: SortOrderInput | SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    edad?: SortOrderInput | SortOrder
    dinero_en_cuenta?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: registers_testCountOrderByAggregateInput
    _avg?: registers_testAvgOrderByAggregateInput
    _max?: registers_testMaxOrderByAggregateInput
    _min?: registers_testMinOrderByAggregateInput
    _sum?: registers_testSumOrderByAggregateInput
  }

  export type registers_testScalarWhereWithAggregatesInput = {
    AND?: registers_testScalarWhereWithAggregatesInput | registers_testScalarWhereWithAggregatesInput[]
    OR?: registers_testScalarWhereWithAggregatesInput[]
    NOT?: registers_testScalarWhereWithAggregatesInput | registers_testScalarWhereWithAggregatesInput[]
    id_register?: IntWithAggregatesFilter<"registers_test"> | number
    nombre?: StringNullableWithAggregatesFilter<"registers_test"> | string | null
    apellido_paterno?: StringNullableWithAggregatesFilter<"registers_test"> | string | null
    apellido_materno?: StringNullableWithAggregatesFilter<"registers_test"> | string | null
    numero?: StringNullableWithAggregatesFilter<"registers_test"> | string | null
    correo?: StringNullableWithAggregatesFilter<"registers_test"> | string | null
    genero?: Enumregisters_test_generoNullableWithAggregatesFilter<"registers_test"> | $Enums.registers_test_genero | null
    edad?: IntNullableWithAggregatesFilter<"registers_test"> | number | null
    dinero_en_cuenta?: DecimalNullableWithAggregatesFilter<"registers_test"> | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"registers_test"> | Date | string | null
  }

  export type sale_detailsWhereInput = {
    AND?: sale_detailsWhereInput | sale_detailsWhereInput[]
    OR?: sale_detailsWhereInput[]
    NOT?: sale_detailsWhereInput | sale_detailsWhereInput[]
    id?: IntFilter<"sale_details"> | number
    sale_id?: IntFilter<"sale_details"> | number
    article_id?: IntFilter<"sale_details"> | number
    quantity?: IntFilter<"sale_details"> | number
    unit_price?: DecimalFilter<"sale_details"> | Decimal | DecimalJsLike | number | string
    sales?: XOR<SalesScalarRelationFilter, salesWhereInput>
    articles?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
  }

  export type sale_detailsOrderByWithRelationInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    sales?: salesOrderByWithRelationInput
    articles?: articlesOrderByWithRelationInput
  }

  export type sale_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sale_detailsWhereInput | sale_detailsWhereInput[]
    OR?: sale_detailsWhereInput[]
    NOT?: sale_detailsWhereInput | sale_detailsWhereInput[]
    sale_id?: IntFilter<"sale_details"> | number
    article_id?: IntFilter<"sale_details"> | number
    quantity?: IntFilter<"sale_details"> | number
    unit_price?: DecimalFilter<"sale_details"> | Decimal | DecimalJsLike | number | string
    sales?: XOR<SalesScalarRelationFilter, salesWhereInput>
    articles?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
  }, "id">

  export type sale_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    _count?: sale_detailsCountOrderByAggregateInput
    _avg?: sale_detailsAvgOrderByAggregateInput
    _max?: sale_detailsMaxOrderByAggregateInput
    _min?: sale_detailsMinOrderByAggregateInput
    _sum?: sale_detailsSumOrderByAggregateInput
  }

  export type sale_detailsScalarWhereWithAggregatesInput = {
    AND?: sale_detailsScalarWhereWithAggregatesInput | sale_detailsScalarWhereWithAggregatesInput[]
    OR?: sale_detailsScalarWhereWithAggregatesInput[]
    NOT?: sale_detailsScalarWhereWithAggregatesInput | sale_detailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sale_details"> | number
    sale_id?: IntWithAggregatesFilter<"sale_details"> | number
    article_id?: IntWithAggregatesFilter<"sale_details"> | number
    quantity?: IntWithAggregatesFilter<"sale_details"> | number
    unit_price?: DecimalWithAggregatesFilter<"sale_details"> | Decimal | DecimalJsLike | number | string
  }

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    id?: IntFilter<"sales"> | number
    client_id?: IntFilter<"sales"> | number
    sale_date?: DateTimeNullableFilter<"sales"> | Date | string | null
    status?: Enumsales_statusNullableFilter<"sales"> | $Enums.sales_status | null
    total?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    sale_details?: Sale_detailsListRelationFilter
    direct_clients?: XOR<Direct_clientsScalarRelationFilter, direct_clientsWhereInput>
  }

  export type salesOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    sale_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    sale_details?: sale_detailsOrderByRelationAggregateInput
    direct_clients?: direct_clientsOrderByWithRelationInput
  }

  export type salesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    client_id?: IntFilter<"sales"> | number
    sale_date?: DateTimeNullableFilter<"sales"> | Date | string | null
    status?: Enumsales_statusNullableFilter<"sales"> | $Enums.sales_status | null
    total?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    sale_details?: Sale_detailsListRelationFilter
    direct_clients?: XOR<Direct_clientsScalarRelationFilter, direct_clientsWhereInput>
  }, "id">

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    sale_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    _count?: salesCountOrderByAggregateInput
    _avg?: salesAvgOrderByAggregateInput
    _max?: salesMaxOrderByAggregateInput
    _min?: salesMinOrderByAggregateInput
    _sum?: salesSumOrderByAggregateInput
  }

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    OR?: salesScalarWhereWithAggregatesInput[]
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sales"> | number
    client_id?: IntWithAggregatesFilter<"sales"> | number
    sale_date?: DateTimeNullableWithAggregatesFilter<"sales"> | Date | string | null
    status?: Enumsales_statusNullableWithAggregatesFilter<"sales"> | $Enums.sales_status | null
    total?: DecimalNullableWithAggregatesFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
  }

  export type suppliersWhereInput = {
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    id?: IntFilter<"suppliers"> | number
    name?: StringFilter<"suppliers"> | string
    contact_name?: StringNullableFilter<"suppliers"> | string | null
    email?: StringNullableFilter<"suppliers"> | string | null
    phone?: StringNullableFilter<"suppliers"> | string | null
    address?: StringNullableFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    articles?: ArticlesListRelationFilter
  }

  export type suppliersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    articles?: articlesOrderByRelationAggregateInput
    _relevance?: suppliersOrderByRelevanceInput
  }

  export type suppliersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    name?: StringFilter<"suppliers"> | string
    contact_name?: StringNullableFilter<"suppliers"> | string | null
    email?: StringNullableFilter<"suppliers"> | string | null
    phone?: StringNullableFilter<"suppliers"> | string | null
    address?: StringNullableFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    articles?: ArticlesListRelationFilter
  }, "id">

  export type suppliersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: suppliersCountOrderByAggregateInput
    _avg?: suppliersAvgOrderByAggregateInput
    _max?: suppliersMaxOrderByAggregateInput
    _min?: suppliersMinOrderByAggregateInput
    _sum?: suppliersSumOrderByAggregateInput
  }

  export type suppliersScalarWhereWithAggregatesInput = {
    AND?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    OR?: suppliersScalarWhereWithAggregatesInput[]
    NOT?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"suppliers"> | number
    name?: StringWithAggregatesFilter<"suppliers"> | string
    contact_name?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    email?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    address?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"suppliers"> | Date | string | null
  }

  export type accountsCreateInput = {
    username: string
    email: string
    password_hash: string
    is_active?: boolean | null
    created_at?: Date | string | null
    profiles?: profilesCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    is_active?: boolean | null
    created_at?: Date | string | null
    profiles?: profilesUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profiles?: profilesUpdateManyWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profiles?: profilesUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type accountsCreateManyInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accountsUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutArticlesInput
    sale_details?: sale_detailsCreateNestedManyWithoutArticlesInput
  }

  export type articlesUncheckedCreateInput = {
    id?: number
    supplier_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    sale_details?: sale_detailsUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type articlesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutArticlesNestedInput
    sale_details?: sale_detailsUpdateManyWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sale_details?: sale_detailsUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type articlesCreateManyInput = {
    id?: number
    supplier_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type articlesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type direct_clientsCreateInput = {
    full_name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    sales?: salesCreateNestedManyWithoutDirect_clientsInput
  }

  export type direct_clientsUncheckedCreateInput = {
    id?: number
    full_name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    sales?: salesUncheckedCreateNestedManyWithoutDirect_clientsInput
  }

  export type direct_clientsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUpdateManyWithoutDirect_clientsNestedInput
  }

  export type direct_clientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUncheckedUpdateManyWithoutDirect_clientsNestedInput
  }

  export type direct_clientsCreateManyInput = {
    id?: number
    full_name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type direct_clientsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type direct_clientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesCreateInput = {
    full_name?: string | null
    address?: string | null
    phone?: string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    accounts: accountsCreateNestedOneWithoutProfilesInput
  }

  export type profilesUncheckedCreateInput = {
    id?: number
    account_id: number
    full_name?: string | null
    address?: string | null
    phone?: string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
  }

  export type profilesUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: accountsUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesCreateManyInput = {
    id?: number
    account_id: number
    full_name?: string | null
    address?: string | null
    phone?: string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
  }

  export type profilesUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type registers_testCreateInput = {
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
    numero?: string | null
    correo?: string | null
    genero?: $Enums.registers_test_genero | null
    edad?: number | null
    dinero_en_cuenta?: Decimal | DecimalJsLike | number | string | null
    fecha_registro?: Date | string | null
  }

  export type registers_testUncheckedCreateInput = {
    id_register?: number
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
    numero?: string | null
    correo?: string | null
    genero?: $Enums.registers_test_genero | null
    edad?: number | null
    dinero_en_cuenta?: Decimal | DecimalJsLike | number | string | null
    fecha_registro?: Date | string | null
  }

  export type registers_testUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableEnumregisters_test_generoFieldUpdateOperationsInput | $Enums.registers_test_genero | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    dinero_en_cuenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type registers_testUncheckedUpdateInput = {
    id_register?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableEnumregisters_test_generoFieldUpdateOperationsInput | $Enums.registers_test_genero | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    dinero_en_cuenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type registers_testCreateManyInput = {
    id_register?: number
    nombre?: string | null
    apellido_paterno?: string | null
    apellido_materno?: string | null
    numero?: string | null
    correo?: string | null
    genero?: $Enums.registers_test_genero | null
    edad?: number | null
    dinero_en_cuenta?: Decimal | DecimalJsLike | number | string | null
    fecha_registro?: Date | string | null
  }

  export type registers_testUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableEnumregisters_test_generoFieldUpdateOperationsInput | $Enums.registers_test_genero | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    dinero_en_cuenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type registers_testUncheckedUpdateManyInput = {
    id_register?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_paterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableEnumregisters_test_generoFieldUpdateOperationsInput | $Enums.registers_test_genero | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    dinero_en_cuenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sale_detailsCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sales: salesCreateNestedOneWithoutSale_detailsInput
    articles: articlesCreateNestedOneWithoutSale_detailsInput
  }

  export type sale_detailsUncheckedCreateInput = {
    id?: number
    sale_id: number
    article_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sales?: salesUpdateOneRequiredWithoutSale_detailsNestedInput
    articles?: articlesUpdateOneRequiredWithoutSale_detailsNestedInput
  }

  export type sale_detailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsCreateManyInput = {
    id?: number
    sale_id: number
    article_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type salesCreateInput = {
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsCreateNestedManyWithoutSalesInput
    direct_clients: direct_clientsCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateInput = {
    id?: number
    client_id: number
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsUncheckedCreateNestedManyWithoutSalesInput
  }

  export type salesUpdateInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsUpdateManyWithoutSalesNestedInput
    direct_clients?: direct_clientsUpdateOneRequiredWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type salesCreateManyInput = {
    id?: number
    client_id: number
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type salesUpdateManyMutationInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type salesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type suppliersCreateInput = {
    name: string
    contact_name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    articles?: articlesCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersUncheckedCreateInput = {
    id?: number
    name: string
    contact_name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    articles?: articlesUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersCreateManyInput = {
    id?: number
    name: string
    contact_name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type suppliersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type suppliersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProfilesListRelationFilter = {
    every?: profilesWhereInput
    some?: profilesWhereInput
    none?: profilesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type profilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsOrderByRelevanceInput = {
    fields: accountsOrderByRelevanceFieldEnum | accountsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SuppliersNullableScalarRelationFilter = {
    is?: suppliersWhereInput | null
    isNot?: suppliersWhereInput | null
  }

  export type Sale_detailsListRelationFilter = {
    every?: sale_detailsWhereInput
    some?: sale_detailsWhereInput
    none?: sale_detailsWhereInput
  }

  export type sale_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articlesOrderByRelevanceInput = {
    fields: articlesOrderByRelevanceFieldEnum | articlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type articlesCountOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type articlesAvgOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type articlesMaxOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type articlesMinOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type articlesSumOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type SalesListRelationFilter = {
    every?: salesWhereInput
    some?: salesWhereInput
    none?: salesWhereInput
  }

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type direct_clientsOrderByRelevanceInput = {
    fields: direct_clientsOrderByRelevanceFieldEnum | direct_clientsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type direct_clientsCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type direct_clientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type direct_clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type direct_clientsMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type direct_clientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountsScalarRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type profilesOrderByRelevanceInput = {
    fields: profilesOrderByRelevanceFieldEnum | profilesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    full_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    created_at?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    full_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    created_at?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    full_name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthdate?: SortOrder
    created_at?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type Enumregisters_test_generoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.registers_test_genero | Enumregisters_test_generoFieldRefInput<$PrismaModel> | null
    in?: $Enums.registers_test_genero[] | null
    notIn?: $Enums.registers_test_genero[] | null
    not?: NestedEnumregisters_test_generoNullableFilter<$PrismaModel> | $Enums.registers_test_genero | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type registers_testOrderByRelevanceInput = {
    fields: registers_testOrderByRelevanceFieldEnum | registers_testOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type registers_testCountOrderByAggregateInput = {
    id_register?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    numero?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    edad?: SortOrder
    dinero_en_cuenta?: SortOrder
    fecha_registro?: SortOrder
  }

  export type registers_testAvgOrderByAggregateInput = {
    id_register?: SortOrder
    edad?: SortOrder
    dinero_en_cuenta?: SortOrder
  }

  export type registers_testMaxOrderByAggregateInput = {
    id_register?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    numero?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    edad?: SortOrder
    dinero_en_cuenta?: SortOrder
    fecha_registro?: SortOrder
  }

  export type registers_testMinOrderByAggregateInput = {
    id_register?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    numero?: SortOrder
    correo?: SortOrder
    genero?: SortOrder
    edad?: SortOrder
    dinero_en_cuenta?: SortOrder
    fecha_registro?: SortOrder
  }

  export type registers_testSumOrderByAggregateInput = {
    id_register?: SortOrder
    edad?: SortOrder
    dinero_en_cuenta?: SortOrder
  }

  export type Enumregisters_test_generoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.registers_test_genero | Enumregisters_test_generoFieldRefInput<$PrismaModel> | null
    in?: $Enums.registers_test_genero[] | null
    notIn?: $Enums.registers_test_genero[] | null
    not?: NestedEnumregisters_test_generoNullableWithAggregatesFilter<$PrismaModel> | $Enums.registers_test_genero | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumregisters_test_generoNullableFilter<$PrismaModel>
    _max?: NestedEnumregisters_test_generoNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SalesScalarRelationFilter = {
    is?: salesWhereInput
    isNot?: salesWhereInput
  }

  export type ArticlesScalarRelationFilter = {
    is?: articlesWhereInput
    isNot?: articlesWhereInput
  }

  export type sale_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type sale_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type sale_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type sale_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type sale_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    sale_id?: SortOrder
    article_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type Enumsales_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.sales_status | Enumsales_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.sales_status[] | null
    notIn?: $Enums.sales_status[] | null
    not?: NestedEnumsales_statusNullableFilter<$PrismaModel> | $Enums.sales_status | null
  }

  export type Direct_clientsScalarRelationFilter = {
    is?: direct_clientsWhereInput
    isNot?: direct_clientsWhereInput
  }

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    sale_date?: SortOrder
    status?: SortOrder
    total?: SortOrder
  }

  export type salesAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
  }

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    sale_date?: SortOrder
    status?: SortOrder
    total?: SortOrder
  }

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    sale_date?: SortOrder
    status?: SortOrder
    total?: SortOrder
  }

  export type salesSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    total?: SortOrder
  }

  export type Enumsales_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sales_status | Enumsales_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.sales_status[] | null
    notIn?: $Enums.sales_status[] | null
    not?: NestedEnumsales_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.sales_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsales_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumsales_statusNullableFilter<$PrismaModel>
  }

  export type ArticlesListRelationFilter = {
    every?: articlesWhereInput
    some?: articlesWhereInput
    none?: articlesWhereInput
  }

  export type articlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type suppliersOrderByRelevanceInput = {
    fields: suppliersOrderByRelevanceFieldEnum | suppliersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type suppliersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type suppliersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type suppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type suppliersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type suppliersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type profilesCreateNestedManyWithoutAccountsInput = {
    create?: XOR<profilesCreateWithoutAccountsInput, profilesUncheckedCreateWithoutAccountsInput> | profilesCreateWithoutAccountsInput[] | profilesUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: profilesCreateOrConnectWithoutAccountsInput | profilesCreateOrConnectWithoutAccountsInput[]
    createMany?: profilesCreateManyAccountsInputEnvelope
    connect?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
  }

  export type profilesUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<profilesCreateWithoutAccountsInput, profilesUncheckedCreateWithoutAccountsInput> | profilesCreateWithoutAccountsInput[] | profilesUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: profilesCreateOrConnectWithoutAccountsInput | profilesCreateOrConnectWithoutAccountsInput[]
    createMany?: profilesCreateManyAccountsInputEnvelope
    connect?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type profilesUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<profilesCreateWithoutAccountsInput, profilesUncheckedCreateWithoutAccountsInput> | profilesCreateWithoutAccountsInput[] | profilesUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: profilesCreateOrConnectWithoutAccountsInput | profilesCreateOrConnectWithoutAccountsInput[]
    upsert?: profilesUpsertWithWhereUniqueWithoutAccountsInput | profilesUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: profilesCreateManyAccountsInputEnvelope
    set?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    disconnect?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    delete?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    connect?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    update?: profilesUpdateWithWhereUniqueWithoutAccountsInput | profilesUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: profilesUpdateManyWithWhereWithoutAccountsInput | profilesUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: profilesScalarWhereInput | profilesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profilesUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<profilesCreateWithoutAccountsInput, profilesUncheckedCreateWithoutAccountsInput> | profilesCreateWithoutAccountsInput[] | profilesUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: profilesCreateOrConnectWithoutAccountsInput | profilesCreateOrConnectWithoutAccountsInput[]
    upsert?: profilesUpsertWithWhereUniqueWithoutAccountsInput | profilesUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: profilesCreateManyAccountsInputEnvelope
    set?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    disconnect?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    delete?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    connect?: profilesWhereUniqueInput | profilesWhereUniqueInput[]
    update?: profilesUpdateWithWhereUniqueWithoutAccountsInput | profilesUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: profilesUpdateManyWithWhereWithoutAccountsInput | profilesUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: profilesScalarWhereInput | profilesScalarWhereInput[]
  }

  export type suppliersCreateNestedOneWithoutArticlesInput = {
    create?: XOR<suppliersCreateWithoutArticlesInput, suppliersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutArticlesInput
    connect?: suppliersWhereUniqueInput
  }

  export type sale_detailsCreateNestedManyWithoutArticlesInput = {
    create?: XOR<sale_detailsCreateWithoutArticlesInput, sale_detailsUncheckedCreateWithoutArticlesInput> | sale_detailsCreateWithoutArticlesInput[] | sale_detailsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutArticlesInput | sale_detailsCreateOrConnectWithoutArticlesInput[]
    createMany?: sale_detailsCreateManyArticlesInputEnvelope
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
  }

  export type sale_detailsUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<sale_detailsCreateWithoutArticlesInput, sale_detailsUncheckedCreateWithoutArticlesInput> | sale_detailsCreateWithoutArticlesInput[] | sale_detailsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutArticlesInput | sale_detailsCreateOrConnectWithoutArticlesInput[]
    createMany?: sale_detailsCreateManyArticlesInputEnvelope
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type suppliersUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<suppliersCreateWithoutArticlesInput, suppliersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutArticlesInput
    upsert?: suppliersUpsertWithoutArticlesInput
    disconnect?: suppliersWhereInput | boolean
    delete?: suppliersWhereInput | boolean
    connect?: suppliersWhereUniqueInput
    update?: XOR<XOR<suppliersUpdateToOneWithWhereWithoutArticlesInput, suppliersUpdateWithoutArticlesInput>, suppliersUncheckedUpdateWithoutArticlesInput>
  }

  export type sale_detailsUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<sale_detailsCreateWithoutArticlesInput, sale_detailsUncheckedCreateWithoutArticlesInput> | sale_detailsCreateWithoutArticlesInput[] | sale_detailsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutArticlesInput | sale_detailsCreateOrConnectWithoutArticlesInput[]
    upsert?: sale_detailsUpsertWithWhereUniqueWithoutArticlesInput | sale_detailsUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: sale_detailsCreateManyArticlesInputEnvelope
    set?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    disconnect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    delete?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    update?: sale_detailsUpdateWithWhereUniqueWithoutArticlesInput | sale_detailsUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: sale_detailsUpdateManyWithWhereWithoutArticlesInput | sale_detailsUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: sale_detailsScalarWhereInput | sale_detailsScalarWhereInput[]
  }

  export type sale_detailsUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<sale_detailsCreateWithoutArticlesInput, sale_detailsUncheckedCreateWithoutArticlesInput> | sale_detailsCreateWithoutArticlesInput[] | sale_detailsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutArticlesInput | sale_detailsCreateOrConnectWithoutArticlesInput[]
    upsert?: sale_detailsUpsertWithWhereUniqueWithoutArticlesInput | sale_detailsUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: sale_detailsCreateManyArticlesInputEnvelope
    set?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    disconnect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    delete?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    update?: sale_detailsUpdateWithWhereUniqueWithoutArticlesInput | sale_detailsUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: sale_detailsUpdateManyWithWhereWithoutArticlesInput | sale_detailsUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: sale_detailsScalarWhereInput | sale_detailsScalarWhereInput[]
  }

  export type salesCreateNestedManyWithoutDirect_clientsInput = {
    create?: XOR<salesCreateWithoutDirect_clientsInput, salesUncheckedCreateWithoutDirect_clientsInput> | salesCreateWithoutDirect_clientsInput[] | salesUncheckedCreateWithoutDirect_clientsInput[]
    connectOrCreate?: salesCreateOrConnectWithoutDirect_clientsInput | salesCreateOrConnectWithoutDirect_clientsInput[]
    createMany?: salesCreateManyDirect_clientsInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutDirect_clientsInput = {
    create?: XOR<salesCreateWithoutDirect_clientsInput, salesUncheckedCreateWithoutDirect_clientsInput> | salesCreateWithoutDirect_clientsInput[] | salesUncheckedCreateWithoutDirect_clientsInput[]
    connectOrCreate?: salesCreateOrConnectWithoutDirect_clientsInput | salesCreateOrConnectWithoutDirect_clientsInput[]
    createMany?: salesCreateManyDirect_clientsInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type salesUpdateManyWithoutDirect_clientsNestedInput = {
    create?: XOR<salesCreateWithoutDirect_clientsInput, salesUncheckedCreateWithoutDirect_clientsInput> | salesCreateWithoutDirect_clientsInput[] | salesUncheckedCreateWithoutDirect_clientsInput[]
    connectOrCreate?: salesCreateOrConnectWithoutDirect_clientsInput | salesCreateOrConnectWithoutDirect_clientsInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutDirect_clientsInput | salesUpsertWithWhereUniqueWithoutDirect_clientsInput[]
    createMany?: salesCreateManyDirect_clientsInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutDirect_clientsInput | salesUpdateWithWhereUniqueWithoutDirect_clientsInput[]
    updateMany?: salesUpdateManyWithWhereWithoutDirect_clientsInput | salesUpdateManyWithWhereWithoutDirect_clientsInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutDirect_clientsNestedInput = {
    create?: XOR<salesCreateWithoutDirect_clientsInput, salesUncheckedCreateWithoutDirect_clientsInput> | salesCreateWithoutDirect_clientsInput[] | salesUncheckedCreateWithoutDirect_clientsInput[]
    connectOrCreate?: salesCreateOrConnectWithoutDirect_clientsInput | salesCreateOrConnectWithoutDirect_clientsInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutDirect_clientsInput | salesUpsertWithWhereUniqueWithoutDirect_clientsInput[]
    createMany?: salesCreateManyDirect_clientsInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutDirect_clientsInput | salesUpdateWithWhereUniqueWithoutDirect_clientsInput[]
    updateMany?: salesUpdateManyWithWhereWithoutDirect_clientsInput | salesUpdateManyWithWhereWithoutDirect_clientsInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type accountsCreateNestedOneWithoutProfilesInput = {
    create?: XOR<accountsCreateWithoutProfilesInput, accountsUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: accountsCreateOrConnectWithoutProfilesInput
    connect?: accountsWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<accountsCreateWithoutProfilesInput, accountsUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: accountsCreateOrConnectWithoutProfilesInput
    upsert?: accountsUpsertWithoutProfilesInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutProfilesInput, accountsUpdateWithoutProfilesInput>, accountsUncheckedUpdateWithoutProfilesInput>
  }

  export type NullableEnumregisters_test_generoFieldUpdateOperationsInput = {
    set?: $Enums.registers_test_genero | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type salesCreateNestedOneWithoutSale_detailsInput = {
    create?: XOR<salesCreateWithoutSale_detailsInput, salesUncheckedCreateWithoutSale_detailsInput>
    connectOrCreate?: salesCreateOrConnectWithoutSale_detailsInput
    connect?: salesWhereUniqueInput
  }

  export type articlesCreateNestedOneWithoutSale_detailsInput = {
    create?: XOR<articlesCreateWithoutSale_detailsInput, articlesUncheckedCreateWithoutSale_detailsInput>
    connectOrCreate?: articlesCreateOrConnectWithoutSale_detailsInput
    connect?: articlesWhereUniqueInput
  }

  export type salesUpdateOneRequiredWithoutSale_detailsNestedInput = {
    create?: XOR<salesCreateWithoutSale_detailsInput, salesUncheckedCreateWithoutSale_detailsInput>
    connectOrCreate?: salesCreateOrConnectWithoutSale_detailsInput
    upsert?: salesUpsertWithoutSale_detailsInput
    connect?: salesWhereUniqueInput
    update?: XOR<XOR<salesUpdateToOneWithWhereWithoutSale_detailsInput, salesUpdateWithoutSale_detailsInput>, salesUncheckedUpdateWithoutSale_detailsInput>
  }

  export type articlesUpdateOneRequiredWithoutSale_detailsNestedInput = {
    create?: XOR<articlesCreateWithoutSale_detailsInput, articlesUncheckedCreateWithoutSale_detailsInput>
    connectOrCreate?: articlesCreateOrConnectWithoutSale_detailsInput
    upsert?: articlesUpsertWithoutSale_detailsInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutSale_detailsInput, articlesUpdateWithoutSale_detailsInput>, articlesUncheckedUpdateWithoutSale_detailsInput>
  }

  export type sale_detailsCreateNestedManyWithoutSalesInput = {
    create?: XOR<sale_detailsCreateWithoutSalesInput, sale_detailsUncheckedCreateWithoutSalesInput> | sale_detailsCreateWithoutSalesInput[] | sale_detailsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutSalesInput | sale_detailsCreateOrConnectWithoutSalesInput[]
    createMany?: sale_detailsCreateManySalesInputEnvelope
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
  }

  export type direct_clientsCreateNestedOneWithoutSalesInput = {
    create?: XOR<direct_clientsCreateWithoutSalesInput, direct_clientsUncheckedCreateWithoutSalesInput>
    connectOrCreate?: direct_clientsCreateOrConnectWithoutSalesInput
    connect?: direct_clientsWhereUniqueInput
  }

  export type sale_detailsUncheckedCreateNestedManyWithoutSalesInput = {
    create?: XOR<sale_detailsCreateWithoutSalesInput, sale_detailsUncheckedCreateWithoutSalesInput> | sale_detailsCreateWithoutSalesInput[] | sale_detailsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutSalesInput | sale_detailsCreateOrConnectWithoutSalesInput[]
    createMany?: sale_detailsCreateManySalesInputEnvelope
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
  }

  export type NullableEnumsales_statusFieldUpdateOperationsInput = {
    set?: $Enums.sales_status | null
  }

  export type sale_detailsUpdateManyWithoutSalesNestedInput = {
    create?: XOR<sale_detailsCreateWithoutSalesInput, sale_detailsUncheckedCreateWithoutSalesInput> | sale_detailsCreateWithoutSalesInput[] | sale_detailsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutSalesInput | sale_detailsCreateOrConnectWithoutSalesInput[]
    upsert?: sale_detailsUpsertWithWhereUniqueWithoutSalesInput | sale_detailsUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: sale_detailsCreateManySalesInputEnvelope
    set?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    disconnect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    delete?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    update?: sale_detailsUpdateWithWhereUniqueWithoutSalesInput | sale_detailsUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: sale_detailsUpdateManyWithWhereWithoutSalesInput | sale_detailsUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: sale_detailsScalarWhereInput | sale_detailsScalarWhereInput[]
  }

  export type direct_clientsUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<direct_clientsCreateWithoutSalesInput, direct_clientsUncheckedCreateWithoutSalesInput>
    connectOrCreate?: direct_clientsCreateOrConnectWithoutSalesInput
    upsert?: direct_clientsUpsertWithoutSalesInput
    connect?: direct_clientsWhereUniqueInput
    update?: XOR<XOR<direct_clientsUpdateToOneWithWhereWithoutSalesInput, direct_clientsUpdateWithoutSalesInput>, direct_clientsUncheckedUpdateWithoutSalesInput>
  }

  export type sale_detailsUncheckedUpdateManyWithoutSalesNestedInput = {
    create?: XOR<sale_detailsCreateWithoutSalesInput, sale_detailsUncheckedCreateWithoutSalesInput> | sale_detailsCreateWithoutSalesInput[] | sale_detailsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sale_detailsCreateOrConnectWithoutSalesInput | sale_detailsCreateOrConnectWithoutSalesInput[]
    upsert?: sale_detailsUpsertWithWhereUniqueWithoutSalesInput | sale_detailsUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: sale_detailsCreateManySalesInputEnvelope
    set?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    disconnect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    delete?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    connect?: sale_detailsWhereUniqueInput | sale_detailsWhereUniqueInput[]
    update?: sale_detailsUpdateWithWhereUniqueWithoutSalesInput | sale_detailsUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: sale_detailsUpdateManyWithWhereWithoutSalesInput | sale_detailsUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: sale_detailsScalarWhereInput | sale_detailsScalarWhereInput[]
  }

  export type articlesCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<articlesCreateWithoutSuppliersInput, articlesUncheckedCreateWithoutSuppliersInput> | articlesCreateWithoutSuppliersInput[] | articlesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutSuppliersInput | articlesCreateOrConnectWithoutSuppliersInput[]
    createMany?: articlesCreateManySuppliersInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type articlesUncheckedCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<articlesCreateWithoutSuppliersInput, articlesUncheckedCreateWithoutSuppliersInput> | articlesCreateWithoutSuppliersInput[] | articlesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutSuppliersInput | articlesCreateOrConnectWithoutSuppliersInput[]
    createMany?: articlesCreateManySuppliersInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type articlesUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<articlesCreateWithoutSuppliersInput, articlesUncheckedCreateWithoutSuppliersInput> | articlesCreateWithoutSuppliersInput[] | articlesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutSuppliersInput | articlesCreateOrConnectWithoutSuppliersInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutSuppliersInput | articlesUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: articlesCreateManySuppliersInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutSuppliersInput | articlesUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutSuppliersInput | articlesUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type articlesUncheckedUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<articlesCreateWithoutSuppliersInput, articlesUncheckedCreateWithoutSuppliersInput> | articlesCreateWithoutSuppliersInput[] | articlesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutSuppliersInput | articlesCreateOrConnectWithoutSuppliersInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutSuppliersInput | articlesUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: articlesCreateManySuppliersInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutSuppliersInput | articlesUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutSuppliersInput | articlesUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedEnumregisters_test_generoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.registers_test_genero | Enumregisters_test_generoFieldRefInput<$PrismaModel> | null
    in?: $Enums.registers_test_genero[] | null
    notIn?: $Enums.registers_test_genero[] | null
    not?: NestedEnumregisters_test_generoNullableFilter<$PrismaModel> | $Enums.registers_test_genero | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumregisters_test_generoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.registers_test_genero | Enumregisters_test_generoFieldRefInput<$PrismaModel> | null
    in?: $Enums.registers_test_genero[] | null
    notIn?: $Enums.registers_test_genero[] | null
    not?: NestedEnumregisters_test_generoNullableWithAggregatesFilter<$PrismaModel> | $Enums.registers_test_genero | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumregisters_test_generoNullableFilter<$PrismaModel>
    _max?: NestedEnumregisters_test_generoNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumsales_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.sales_status | Enumsales_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.sales_status[] | null
    notIn?: $Enums.sales_status[] | null
    not?: NestedEnumsales_statusNullableFilter<$PrismaModel> | $Enums.sales_status | null
  }

  export type NestedEnumsales_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sales_status | Enumsales_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.sales_status[] | null
    notIn?: $Enums.sales_status[] | null
    not?: NestedEnumsales_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.sales_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsales_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumsales_statusNullableFilter<$PrismaModel>
  }

  export type profilesCreateWithoutAccountsInput = {
    full_name?: string | null
    address?: string | null
    phone?: string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
  }

  export type profilesUncheckedCreateWithoutAccountsInput = {
    id?: number
    full_name?: string | null
    address?: string | null
    phone?: string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
  }

  export type profilesCreateOrConnectWithoutAccountsInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutAccountsInput, profilesUncheckedCreateWithoutAccountsInput>
  }

  export type profilesCreateManyAccountsInputEnvelope = {
    data: profilesCreateManyAccountsInput | profilesCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type profilesUpsertWithWhereUniqueWithoutAccountsInput = {
    where: profilesWhereUniqueInput
    update: XOR<profilesUpdateWithoutAccountsInput, profilesUncheckedUpdateWithoutAccountsInput>
    create: XOR<profilesCreateWithoutAccountsInput, profilesUncheckedCreateWithoutAccountsInput>
  }

  export type profilesUpdateWithWhereUniqueWithoutAccountsInput = {
    where: profilesWhereUniqueInput
    data: XOR<profilesUpdateWithoutAccountsInput, profilesUncheckedUpdateWithoutAccountsInput>
  }

  export type profilesUpdateManyWithWhereWithoutAccountsInput = {
    where: profilesScalarWhereInput
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyWithoutAccountsInput>
  }

  export type profilesScalarWhereInput = {
    AND?: profilesScalarWhereInput | profilesScalarWhereInput[]
    OR?: profilesScalarWhereInput[]
    NOT?: profilesScalarWhereInput | profilesScalarWhereInput[]
    id?: IntFilter<"profiles"> | number
    account_id?: IntFilter<"profiles"> | number
    full_name?: StringNullableFilter<"profiles"> | string | null
    address?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    birthdate?: DateTimeNullableFilter<"profiles"> | Date | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
  }

  export type suppliersCreateWithoutArticlesInput = {
    name: string
    contact_name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type suppliersUncheckedCreateWithoutArticlesInput = {
    id?: number
    name: string
    contact_name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type suppliersCreateOrConnectWithoutArticlesInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutArticlesInput, suppliersUncheckedCreateWithoutArticlesInput>
  }

  export type sale_detailsCreateWithoutArticlesInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sales: salesCreateNestedOneWithoutSale_detailsInput
  }

  export type sale_detailsUncheckedCreateWithoutArticlesInput = {
    id?: number
    sale_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsCreateOrConnectWithoutArticlesInput = {
    where: sale_detailsWhereUniqueInput
    create: XOR<sale_detailsCreateWithoutArticlesInput, sale_detailsUncheckedCreateWithoutArticlesInput>
  }

  export type sale_detailsCreateManyArticlesInputEnvelope = {
    data: sale_detailsCreateManyArticlesInput | sale_detailsCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type suppliersUpsertWithoutArticlesInput = {
    update: XOR<suppliersUpdateWithoutArticlesInput, suppliersUncheckedUpdateWithoutArticlesInput>
    create: XOR<suppliersCreateWithoutArticlesInput, suppliersUncheckedCreateWithoutArticlesInput>
    where?: suppliersWhereInput
  }

  export type suppliersUpdateToOneWithWhereWithoutArticlesInput = {
    where?: suppliersWhereInput
    data: XOR<suppliersUpdateWithoutArticlesInput, suppliersUncheckedUpdateWithoutArticlesInput>
  }

  export type suppliersUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type suppliersUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sale_detailsUpsertWithWhereUniqueWithoutArticlesInput = {
    where: sale_detailsWhereUniqueInput
    update: XOR<sale_detailsUpdateWithoutArticlesInput, sale_detailsUncheckedUpdateWithoutArticlesInput>
    create: XOR<sale_detailsCreateWithoutArticlesInput, sale_detailsUncheckedCreateWithoutArticlesInput>
  }

  export type sale_detailsUpdateWithWhereUniqueWithoutArticlesInput = {
    where: sale_detailsWhereUniqueInput
    data: XOR<sale_detailsUpdateWithoutArticlesInput, sale_detailsUncheckedUpdateWithoutArticlesInput>
  }

  export type sale_detailsUpdateManyWithWhereWithoutArticlesInput = {
    where: sale_detailsScalarWhereInput
    data: XOR<sale_detailsUpdateManyMutationInput, sale_detailsUncheckedUpdateManyWithoutArticlesInput>
  }

  export type sale_detailsScalarWhereInput = {
    AND?: sale_detailsScalarWhereInput | sale_detailsScalarWhereInput[]
    OR?: sale_detailsScalarWhereInput[]
    NOT?: sale_detailsScalarWhereInput | sale_detailsScalarWhereInput[]
    id?: IntFilter<"sale_details"> | number
    sale_id?: IntFilter<"sale_details"> | number
    article_id?: IntFilter<"sale_details"> | number
    quantity?: IntFilter<"sale_details"> | number
    unit_price?: DecimalFilter<"sale_details"> | Decimal | DecimalJsLike | number | string
  }

  export type salesCreateWithoutDirect_clientsInput = {
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsCreateNestedManyWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutDirect_clientsInput = {
    id?: number
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsUncheckedCreateNestedManyWithoutSalesInput
  }

  export type salesCreateOrConnectWithoutDirect_clientsInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutDirect_clientsInput, salesUncheckedCreateWithoutDirect_clientsInput>
  }

  export type salesCreateManyDirect_clientsInputEnvelope = {
    data: salesCreateManyDirect_clientsInput | salesCreateManyDirect_clientsInput[]
    skipDuplicates?: boolean
  }

  export type salesUpsertWithWhereUniqueWithoutDirect_clientsInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutDirect_clientsInput, salesUncheckedUpdateWithoutDirect_clientsInput>
    create: XOR<salesCreateWithoutDirect_clientsInput, salesUncheckedCreateWithoutDirect_clientsInput>
  }

  export type salesUpdateWithWhereUniqueWithoutDirect_clientsInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutDirect_clientsInput, salesUncheckedUpdateWithoutDirect_clientsInput>
  }

  export type salesUpdateManyWithWhereWithoutDirect_clientsInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutDirect_clientsInput>
  }

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[]
    OR?: salesScalarWhereInput[]
    NOT?: salesScalarWhereInput | salesScalarWhereInput[]
    id?: IntFilter<"sales"> | number
    client_id?: IntFilter<"sales"> | number
    sale_date?: DateTimeNullableFilter<"sales"> | Date | string | null
    status?: Enumsales_statusNullableFilter<"sales"> | $Enums.sales_status | null
    total?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
  }

  export type accountsCreateWithoutProfilesInput = {
    username: string
    email: string
    password_hash: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accountsUncheckedCreateWithoutProfilesInput = {
    id?: number
    username: string
    email: string
    password_hash: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type accountsCreateOrConnectWithoutProfilesInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutProfilesInput, accountsUncheckedCreateWithoutProfilesInput>
  }

  export type accountsUpsertWithoutProfilesInput = {
    update: XOR<accountsUpdateWithoutProfilesInput, accountsUncheckedUpdateWithoutProfilesInput>
    create: XOR<accountsCreateWithoutProfilesInput, accountsUncheckedCreateWithoutProfilesInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutProfilesInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutProfilesInput, accountsUncheckedUpdateWithoutProfilesInput>
  }

  export type accountsUpdateWithoutProfilesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accountsUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type salesCreateWithoutSale_detailsInput = {
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
    direct_clients: direct_clientsCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutSale_detailsInput = {
    id?: number
    client_id: number
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type salesCreateOrConnectWithoutSale_detailsInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutSale_detailsInput, salesUncheckedCreateWithoutSale_detailsInput>
  }

  export type articlesCreateWithoutSale_detailsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutArticlesInput
  }

  export type articlesUncheckedCreateWithoutSale_detailsInput = {
    id?: number
    supplier_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type articlesCreateOrConnectWithoutSale_detailsInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutSale_detailsInput, articlesUncheckedCreateWithoutSale_detailsInput>
  }

  export type salesUpsertWithoutSale_detailsInput = {
    update: XOR<salesUpdateWithoutSale_detailsInput, salesUncheckedUpdateWithoutSale_detailsInput>
    create: XOR<salesCreateWithoutSale_detailsInput, salesUncheckedCreateWithoutSale_detailsInput>
    where?: salesWhereInput
  }

  export type salesUpdateToOneWithWhereWithoutSale_detailsInput = {
    where?: salesWhereInput
    data: XOR<salesUpdateWithoutSale_detailsInput, salesUncheckedUpdateWithoutSale_detailsInput>
  }

  export type salesUpdateWithoutSale_detailsInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    direct_clients?: direct_clientsUpdateOneRequiredWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutSale_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type articlesUpsertWithoutSale_detailsInput = {
    update: XOR<articlesUpdateWithoutSale_detailsInput, articlesUncheckedUpdateWithoutSale_detailsInput>
    create: XOR<articlesCreateWithoutSale_detailsInput, articlesUncheckedCreateWithoutSale_detailsInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutSale_detailsInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutSale_detailsInput, articlesUncheckedUpdateWithoutSale_detailsInput>
  }

  export type articlesUpdateWithoutSale_detailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateWithoutSale_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sale_detailsCreateWithoutSalesInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    articles: articlesCreateNestedOneWithoutSale_detailsInput
  }

  export type sale_detailsUncheckedCreateWithoutSalesInput = {
    id?: number
    article_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsCreateOrConnectWithoutSalesInput = {
    where: sale_detailsWhereUniqueInput
    create: XOR<sale_detailsCreateWithoutSalesInput, sale_detailsUncheckedCreateWithoutSalesInput>
  }

  export type sale_detailsCreateManySalesInputEnvelope = {
    data: sale_detailsCreateManySalesInput | sale_detailsCreateManySalesInput[]
    skipDuplicates?: boolean
  }

  export type direct_clientsCreateWithoutSalesInput = {
    full_name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type direct_clientsUncheckedCreateWithoutSalesInput = {
    id?: number
    full_name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
  }

  export type direct_clientsCreateOrConnectWithoutSalesInput = {
    where: direct_clientsWhereUniqueInput
    create: XOR<direct_clientsCreateWithoutSalesInput, direct_clientsUncheckedCreateWithoutSalesInput>
  }

  export type sale_detailsUpsertWithWhereUniqueWithoutSalesInput = {
    where: sale_detailsWhereUniqueInput
    update: XOR<sale_detailsUpdateWithoutSalesInput, sale_detailsUncheckedUpdateWithoutSalesInput>
    create: XOR<sale_detailsCreateWithoutSalesInput, sale_detailsUncheckedCreateWithoutSalesInput>
  }

  export type sale_detailsUpdateWithWhereUniqueWithoutSalesInput = {
    where: sale_detailsWhereUniqueInput
    data: XOR<sale_detailsUpdateWithoutSalesInput, sale_detailsUncheckedUpdateWithoutSalesInput>
  }

  export type sale_detailsUpdateManyWithWhereWithoutSalesInput = {
    where: sale_detailsScalarWhereInput
    data: XOR<sale_detailsUpdateManyMutationInput, sale_detailsUncheckedUpdateManyWithoutSalesInput>
  }

  export type direct_clientsUpsertWithoutSalesInput = {
    update: XOR<direct_clientsUpdateWithoutSalesInput, direct_clientsUncheckedUpdateWithoutSalesInput>
    create: XOR<direct_clientsCreateWithoutSalesInput, direct_clientsUncheckedCreateWithoutSalesInput>
    where?: direct_clientsWhereInput
  }

  export type direct_clientsUpdateToOneWithWhereWithoutSalesInput = {
    where?: direct_clientsWhereInput
    data: XOR<direct_clientsUpdateWithoutSalesInput, direct_clientsUncheckedUpdateWithoutSalesInput>
  }

  export type direct_clientsUpdateWithoutSalesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type direct_clientsUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesCreateWithoutSuppliersInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    sale_details?: sale_detailsCreateNestedManyWithoutArticlesInput
  }

  export type articlesUncheckedCreateWithoutSuppliersInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    sale_details?: sale_detailsUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type articlesCreateOrConnectWithoutSuppliersInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutSuppliersInput, articlesUncheckedCreateWithoutSuppliersInput>
  }

  export type articlesCreateManySuppliersInputEnvelope = {
    data: articlesCreateManySuppliersInput | articlesCreateManySuppliersInput[]
    skipDuplicates?: boolean
  }

  export type articlesUpsertWithWhereUniqueWithoutSuppliersInput = {
    where: articlesWhereUniqueInput
    update: XOR<articlesUpdateWithoutSuppliersInput, articlesUncheckedUpdateWithoutSuppliersInput>
    create: XOR<articlesCreateWithoutSuppliersInput, articlesUncheckedCreateWithoutSuppliersInput>
  }

  export type articlesUpdateWithWhereUniqueWithoutSuppliersInput = {
    where: articlesWhereUniqueInput
    data: XOR<articlesUpdateWithoutSuppliersInput, articlesUncheckedUpdateWithoutSuppliersInput>
  }

  export type articlesUpdateManyWithWhereWithoutSuppliersInput = {
    where: articlesScalarWhereInput
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type articlesScalarWhereInput = {
    AND?: articlesScalarWhereInput | articlesScalarWhereInput[]
    OR?: articlesScalarWhereInput[]
    NOT?: articlesScalarWhereInput | articlesScalarWhereInput[]
    id?: IntFilter<"articles"> | number
    supplier_id?: IntNullableFilter<"articles"> | number | null
    name?: StringFilter<"articles"> | string
    description?: StringNullableFilter<"articles"> | string | null
    price?: DecimalFilter<"articles"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"articles"> | number | null
    is_active?: BoolNullableFilter<"articles"> | boolean | null
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
  }

  export type profilesCreateManyAccountsInput = {
    id?: number
    full_name?: string | null
    address?: string | null
    phone?: string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
  }

  export type profilesUpdateWithoutAccountsInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateManyWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sale_detailsCreateManyArticlesInput = {
    id?: number
    sale_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUpdateWithoutArticlesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sales?: salesUpdateOneRequiredWithoutSale_detailsNestedInput
  }

  export type sale_detailsUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUncheckedUpdateManyWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type salesCreateManyDirect_clientsInput = {
    id?: number
    sale_date?: Date | string | null
    status?: $Enums.sales_status | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type salesUpdateWithoutDirect_clientsInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsUpdateManyWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutDirect_clientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sale_details?: sale_detailsUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateManyWithoutDirect_clientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumsales_statusFieldUpdateOperationsInput | $Enums.sales_status | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type sale_detailsCreateManySalesInput = {
    id?: number
    article_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUpdateWithoutSalesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    articles?: articlesUpdateOneRequiredWithoutSale_detailsNestedInput
  }

  export type sale_detailsUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type sale_detailsUncheckedUpdateManyWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type articlesCreateManySuppliersInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type articlesUpdateWithoutSuppliersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sale_details?: sale_detailsUpdateManyWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sale_details?: sale_detailsUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateManyWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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