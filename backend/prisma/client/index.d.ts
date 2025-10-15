
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
 * Model entities
 * 
 */
export type entities = $Result.DefaultSelection<Prisma.$entitiesPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model spots
 * 
 */
export type spots = $Result.DefaultSelection<Prisma.$spotsPayload>
/**
 * Model tokens
 * 
 */
export type tokens = $Result.DefaultSelection<Prisma.$tokensPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model logins
 * 
 */
export type logins = $Result.DefaultSelection<Prisma.$loginsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entities
 * const entities = await prisma.entities.findMany()
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
   * // Fetch zero or more Entities
   * const entities = await prisma.entities.findMany()
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
   * `prisma.entities`: Exposes CRUD operations for the **entities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entities.findMany()
    * ```
    */
  get entities(): Prisma.entitiesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spots`: Exposes CRUD operations for the **spots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spots
    * const spots = await prisma.spots.findMany()
    * ```
    */
  get spots(): Prisma.spotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logins`: Exposes CRUD operations for the **logins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.logins.findMany()
    * ```
    */
  get logins(): Prisma.loginsDelegate<ExtArgs, ClientOptions>;
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
    entities: 'entities',
    profiles: 'profiles',
    roles: 'roles',
    spots: 'spots',
    tokens: 'tokens',
    users: 'users',
    logs: 'logs',
    logins: 'logins'
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
      modelProps: "entities" | "profiles" | "roles" | "spots" | "tokens" | "users" | "logs" | "logins"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      entities: {
        payload: Prisma.$entitiesPayload<ExtArgs>
        fields: Prisma.entitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          findFirst: {
            args: Prisma.entitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          findMany: {
            args: Prisma.entitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>[]
          }
          create: {
            args: Prisma.entitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          createMany: {
            args: Prisma.entitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          update: {
            args: Prisma.entitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          deleteMany: {
            args: Prisma.entitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          aggregate: {
            args: Prisma.EntitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntities>
          }
          groupBy: {
            args: Prisma.entitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.entitiesCountArgs<ExtArgs>
            result: $Utils.Optional<EntitiesCountAggregateOutputType> | number
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
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      spots: {
        payload: Prisma.$spotsPayload<ExtArgs>
        fields: Prisma.spotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          findFirst: {
            args: Prisma.spotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          findMany: {
            args: Prisma.spotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>[]
          }
          create: {
            args: Prisma.spotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          createMany: {
            args: Prisma.spotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.spotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          update: {
            args: Prisma.spotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          deleteMany: {
            args: Prisma.spotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.spotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          aggregate: {
            args: Prisma.SpotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpots>
          }
          groupBy: {
            args: Prisma.spotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.spotsCountArgs<ExtArgs>
            result: $Utils.Optional<SpotsCountAggregateOutputType> | number
          }
        }
      }
      tokens: {
        payload: Prisma.$tokensPayload<ExtArgs>
        fields: Prisma.tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findFirst: {
            args: Prisma.tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findMany: {
            args: Prisma.tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          create: {
            args: Prisma.tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          createMany: {
            args: Prisma.tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          update: {
            args: Prisma.tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          deleteMany: {
            args: Prisma.tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      logins: {
        payload: Prisma.$loginsPayload<ExtArgs>
        fields: Prisma.loginsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loginsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loginsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          findFirst: {
            args: Prisma.loginsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loginsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          findMany: {
            args: Prisma.loginsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>[]
          }
          create: {
            args: Prisma.loginsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          createMany: {
            args: Prisma.loginsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.loginsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          update: {
            args: Prisma.loginsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          deleteMany: {
            args: Prisma.loginsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loginsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.loginsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          aggregate: {
            args: Prisma.LoginsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogins>
          }
          groupBy: {
            args: Prisma.loginsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginsGroupByOutputType>[]
          }
          count: {
            args: Prisma.loginsCountArgs<ExtArgs>
            result: $Utils.Optional<LoginsCountAggregateOutputType> | number
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
    entities?: entitiesOmit
    profiles?: profilesOmit
    roles?: rolesOmit
    spots?: spotsOmit
    tokens?: tokensOmit
    users?: usersOmit
    logs?: logsOmit
    logins?: loginsOmit
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
   * Count Type EntitiesCountOutputType
   */

  export type EntitiesCountOutputType = {
    spots: number
    users: number
  }

  export type EntitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | EntitiesCountOutputTypeCountSpotsArgs
    users?: boolean | EntitiesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * EntitiesCountOutputType without action
   */
  export type EntitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntitiesCountOutputType
     */
    select?: EntitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntitiesCountOutputType without action
   */
  export type EntitiesCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spotsWhereInput
  }

  /**
   * EntitiesCountOutputType without action
   */
  export type EntitiesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    users: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProfilesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type SpotsCountOutputType
   */

  export type SpotsCountOutputType = {
    users: number
  }

  export type SpotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SpotsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SpotsCountOutputType without action
   */
  export type SpotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotsCountOutputType
     */
    select?: SpotsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpotsCountOutputType without action
   */
  export type SpotsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type TokensCountOutputType
   */

  export type TokensCountOutputType = {
    logins: number
  }

  export type TokensCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logins?: boolean | TokensCountOutputTypeCountLoginsArgs
  }

  // Custom InputTypes
  /**
   * TokensCountOutputType without action
   */
  export type TokensCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokensCountOutputType
     */
    select?: TokensCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokensCountOutputType without action
   */
  export type TokensCountOutputTypeCountLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    tokens: number
    logs: number
    logins: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UsersCountOutputTypeCountTokensArgs
    logs?: boolean | UsersCountOutputTypeCountLogsArgs
    logins?: boolean | UsersCountOutputTypeCountLoginsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model entities
   */

  export type AggregateEntities = {
    _count: EntitiesCountAggregateOutputType | null
    _avg: EntitiesAvgAggregateOutputType | null
    _sum: EntitiesSumAggregateOutputType | null
    _min: EntitiesMinAggregateOutputType | null
    _max: EntitiesMaxAggregateOutputType | null
  }

  export type EntitiesAvgAggregateOutputType = {
    id_entity: number | null
    active: number | null
  }

  export type EntitiesSumAggregateOutputType = {
    id_entity: number | null
    active: number | null
  }

  export type EntitiesMinAggregateOutputType = {
    id_entity: number | null
    name: string | null
    type: string | null
    description: string | null
    number: string | null
    size: string | null
    logo_url: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntitiesMaxAggregateOutputType = {
    id_entity: number | null
    name: string | null
    type: string | null
    description: string | null
    number: string | null
    size: string | null
    logo_url: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntitiesCountAggregateOutputType = {
    id_entity: number
    name: number
    type: number
    description: number
    number: number
    size: number
    logo_url: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EntitiesAvgAggregateInputType = {
    id_entity?: true
    active?: true
  }

  export type EntitiesSumAggregateInputType = {
    id_entity?: true
    active?: true
  }

  export type EntitiesMinAggregateInputType = {
    id_entity?: true
    name?: true
    type?: true
    description?: true
    number?: true
    size?: true
    logo_url?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type EntitiesMaxAggregateInputType = {
    id_entity?: true
    name?: true
    type?: true
    description?: true
    number?: true
    size?: true
    logo_url?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type EntitiesCountAggregateInputType = {
    id_entity?: true
    name?: true
    type?: true
    description?: true
    number?: true
    size?: true
    logo_url?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EntitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entities to aggregate.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entities
    **/
    _count?: true | EntitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntitiesMaxAggregateInputType
  }

  export type GetEntitiesAggregateType<T extends EntitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateEntities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntities[P]>
      : GetScalarType<T[P], AggregateEntities[P]>
  }




  export type entitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entitiesWhereInput
    orderBy?: entitiesOrderByWithAggregationInput | entitiesOrderByWithAggregationInput[]
    by: EntitiesScalarFieldEnum[] | EntitiesScalarFieldEnum
    having?: entitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntitiesCountAggregateInputType | true
    _avg?: EntitiesAvgAggregateInputType
    _sum?: EntitiesSumAggregateInputType
    _min?: EntitiesMinAggregateInputType
    _max?: EntitiesMaxAggregateInputType
  }

  export type EntitiesGroupByOutputType = {
    id_entity: number
    name: string
    type: string
    description: string | null
    number: string | null
    size: string | null
    logo_url: string | null
    active: number
    created_at: Date | null
    updated_at: Date | null
    _count: EntitiesCountAggregateOutputType | null
    _avg: EntitiesAvgAggregateOutputType | null
    _sum: EntitiesSumAggregateOutputType | null
    _min: EntitiesMinAggregateOutputType | null
    _max: EntitiesMaxAggregateOutputType | null
  }

  type GetEntitiesGroupByPayload<T extends entitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntitiesGroupByOutputType[P]>
            : GetScalarType<T[P], EntitiesGroupByOutputType[P]>
        }
      >
    >


  export type entitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_entity?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    number?: boolean
    size?: boolean
    logo_url?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    spots?: boolean | entities$spotsArgs<ExtArgs>
    users?: boolean | entities$usersArgs<ExtArgs>
    _count?: boolean | EntitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entities"]>



  export type entitiesSelectScalar = {
    id_entity?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    number?: boolean
    size?: boolean
    logo_url?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type entitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_entity" | "name" | "type" | "description" | "number" | "size" | "logo_url" | "active" | "created_at" | "updated_at", ExtArgs["result"]["entities"]>
  export type entitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | entities$spotsArgs<ExtArgs>
    users?: boolean | entities$usersArgs<ExtArgs>
    _count?: boolean | EntitiesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $entitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entities"
    objects: {
      spots: Prisma.$spotsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_entity: number
      name: string
      type: string
      description: string | null
      number: string | null
      size: string | null
      logo_url: string | null
      active: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["entities"]>
    composites: {}
  }

  type entitiesGetPayload<S extends boolean | null | undefined | entitiesDefaultArgs> = $Result.GetResult<Prisma.$entitiesPayload, S>

  type entitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntitiesCountAggregateInputType | true
    }

  export interface entitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entities'], meta: { name: 'entities' } }
    /**
     * Find zero or one Entities that matches the filter.
     * @param {entitiesFindUniqueArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entitiesFindUniqueArgs>(args: SelectSubset<T, entitiesFindUniqueArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entitiesFindUniqueOrThrowArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, entitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesFindFirstArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entitiesFindFirstArgs>(args?: SelectSubset<T, entitiesFindFirstArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesFindFirstOrThrowArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, entitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entities.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entities.findMany({ take: 10 })
     * 
     * // Only select the `id_entity`
     * const entitiesWithId_entityOnly = await prisma.entities.findMany({ select: { id_entity: true } })
     * 
     */
    findMany<T extends entitiesFindManyArgs>(args?: SelectSubset<T, entitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entities.
     * @param {entitiesCreateArgs} args - Arguments to create a Entities.
     * @example
     * // Create one Entities
     * const Entities = await prisma.entities.create({
     *   data: {
     *     // ... data to create a Entities
     *   }
     * })
     * 
     */
    create<T extends entitiesCreateArgs>(args: SelectSubset<T, entitiesCreateArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entities.
     * @param {entitiesCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entities = await prisma.entities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entitiesCreateManyArgs>(args?: SelectSubset<T, entitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entities.
     * @param {entitiesDeleteArgs} args - Arguments to delete one Entities.
     * @example
     * // Delete one Entities
     * const Entities = await prisma.entities.delete({
     *   where: {
     *     // ... filter to delete one Entities
     *   }
     * })
     * 
     */
    delete<T extends entitiesDeleteArgs>(args: SelectSubset<T, entitiesDeleteArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entities.
     * @param {entitiesUpdateArgs} args - Arguments to update one Entities.
     * @example
     * // Update one Entities
     * const entities = await prisma.entities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entitiesUpdateArgs>(args: SelectSubset<T, entitiesUpdateArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entities.
     * @param {entitiesDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entitiesDeleteManyArgs>(args?: SelectSubset<T, entitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entities = await prisma.entities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entitiesUpdateManyArgs>(args: SelectSubset<T, entitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entities.
     * @param {entitiesUpsertArgs} args - Arguments to update or create a Entities.
     * @example
     * // Update or create a Entities
     * const entities = await prisma.entities.upsert({
     *   create: {
     *     // ... data to create a Entities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entities we want to update
     *   }
     * })
     */
    upsert<T extends entitiesUpsertArgs>(args: SelectSubset<T, entitiesUpsertArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entities.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends entitiesCountArgs>(
      args?: Subset<T, entitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntitiesAggregateArgs>(args: Subset<T, EntitiesAggregateArgs>): Prisma.PrismaPromise<GetEntitiesAggregateType<T>>

    /**
     * Group by Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesGroupByArgs} args - Group by arguments.
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
      T extends entitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entitiesGroupByArgs['orderBy'] }
        : { orderBy?: entitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, entitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entities model
   */
  readonly fields: entitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends entities$spotsArgs<ExtArgs> = {}>(args?: Subset<T, entities$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends entities$usersArgs<ExtArgs> = {}>(args?: Subset<T, entities$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the entities model
   */
  interface entitiesFieldRefs {
    readonly id_entity: FieldRef<"entities", 'Int'>
    readonly name: FieldRef<"entities", 'String'>
    readonly type: FieldRef<"entities", 'String'>
    readonly description: FieldRef<"entities", 'String'>
    readonly number: FieldRef<"entities", 'String'>
    readonly size: FieldRef<"entities", 'String'>
    readonly logo_url: FieldRef<"entities", 'String'>
    readonly active: FieldRef<"entities", 'Int'>
    readonly created_at: FieldRef<"entities", 'DateTime'>
    readonly updated_at: FieldRef<"entities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entities findUnique
   */
  export type entitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities findUniqueOrThrow
   */
  export type entitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities findFirst
   */
  export type entitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entities.
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entities.
     */
    distinct?: EntitiesScalarFieldEnum | EntitiesScalarFieldEnum[]
  }

  /**
   * entities findFirstOrThrow
   */
  export type entitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entities.
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entities.
     */
    distinct?: EntitiesScalarFieldEnum | EntitiesScalarFieldEnum[]
  }

  /**
   * entities findMany
   */
  export type entitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entities.
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    distinct?: EntitiesScalarFieldEnum | EntitiesScalarFieldEnum[]
  }

  /**
   * entities create
   */
  export type entitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a entities.
     */
    data: XOR<entitiesCreateInput, entitiesUncheckedCreateInput>
  }

  /**
   * entities createMany
   */
  export type entitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entities.
     */
    data: entitiesCreateManyInput | entitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entities update
   */
  export type entitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a entities.
     */
    data: XOR<entitiesUpdateInput, entitiesUncheckedUpdateInput>
    /**
     * Choose, which entities to update.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities updateMany
   */
  export type entitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entities.
     */
    data: XOR<entitiesUpdateManyMutationInput, entitiesUncheckedUpdateManyInput>
    /**
     * Filter which entities to update
     */
    where?: entitiesWhereInput
    /**
     * Limit how many entities to update.
     */
    limit?: number
  }

  /**
   * entities upsert
   */
  export type entitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the entities to update in case it exists.
     */
    where: entitiesWhereUniqueInput
    /**
     * In case the entities found by the `where` argument doesn't exist, create a new entities with this data.
     */
    create: XOR<entitiesCreateInput, entitiesUncheckedCreateInput>
    /**
     * In case the entities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entitiesUpdateInput, entitiesUncheckedUpdateInput>
  }

  /**
   * entities delete
   */
  export type entitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter which entities to delete.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities deleteMany
   */
  export type entitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entities to delete
     */
    where?: entitiesWhereInput
    /**
     * Limit how many entities to delete.
     */
    limit?: number
  }

  /**
   * entities.spots
   */
  export type entities$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    where?: spotsWhereInput
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    cursor?: spotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * entities.users
   */
  export type entities$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * entities without action
   */
  export type entitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
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
    id_profile: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id_profile: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id_profile: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id_profile: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id_profile: number
    first_name: number
    last_name: number
    phone: number
    avatar_url: number
    bio: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id_profile?: true
  }

  export type ProfilesSumAggregateInputType = {
    id_profile?: true
  }

  export type ProfilesMinAggregateInputType = {
    id_profile?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id_profile?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesCountAggregateInputType = {
    id_profile?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
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
    id_profile: number
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
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
    id_profile?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | profiles$usersArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>



  export type profilesSelectScalar = {
    id_profile?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profile" | "first_name" | "last_name" | "phone" | "avatar_url" | "bio" | "created_at" | "updated_at", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | profiles$usersArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profile: number
      first_name: string | null
      last_name: string | null
      phone: string | null
      avatar_url: string | null
      bio: string | null
      created_at: Date | null
      updated_at: Date | null
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
     * // Only select the `id_profile`
     * const profilesWithId_profileOnly = await prisma.profiles.findMany({ select: { id_profile: true } })
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
    users<T extends profiles$usersArgs<ExtArgs> = {}>(args?: Subset<T, profiles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id_profile: FieldRef<"profiles", 'Int'>
    readonly first_name: FieldRef<"profiles", 'String'>
    readonly last_name: FieldRef<"profiles", 'String'>
    readonly phone: FieldRef<"profiles", 'String'>
    readonly avatar_url: FieldRef<"profiles", 'String'>
    readonly bio: FieldRef<"profiles", 'String'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
    readonly updated_at: FieldRef<"profiles", 'DateTime'>
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
    data?: XOR<profilesCreateInput, profilesUncheckedCreateInput>
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
   * profiles.users
   */
  export type profiles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
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
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id_role: number | null
  }

  export type RolesSumAggregateOutputType = {
    id_role: number | null
  }

  export type RolesMinAggregateOutputType = {
    id_role: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id_role: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id_role: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id_role?: true
  }

  export type RolesSumAggregateInputType = {
    id_role?: true
  }

  export type RolesMinAggregateInputType = {
    id_role?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id_role?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id_role?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id_role: number
    name: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type rolesSelectScalar = {
    id_role?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_role" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_role: number
      name: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id_role`
     * const rolesWithId_roleOnly = await prisma.roles.findMany({ select: { id_role: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id_role: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly description: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model spots
   */

  export type AggregateSpots = {
    _count: SpotsCountAggregateOutputType | null
    _avg: SpotsAvgAggregateOutputType | null
    _sum: SpotsSumAggregateOutputType | null
    _min: SpotsMinAggregateOutputType | null
    _max: SpotsMaxAggregateOutputType | null
  }

  export type SpotsAvgAggregateOutputType = {
    id_spot: number | null
    entity_id: number | null
    active: number | null
  }

  export type SpotsSumAggregateOutputType = {
    id_spot: number | null
    entity_id: number | null
    active: number | null
  }

  export type SpotsMinAggregateOutputType = {
    id_spot: number | null
    entity_id: number | null
    name: string | null
    description: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpotsMaxAggregateOutputType = {
    id_spot: number | null
    entity_id: number | null
    name: string | null
    description: string | null
    active: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpotsCountAggregateOutputType = {
    id_spot: number
    entity_id: number
    name: number
    description: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SpotsAvgAggregateInputType = {
    id_spot?: true
    entity_id?: true
    active?: true
  }

  export type SpotsSumAggregateInputType = {
    id_spot?: true
    entity_id?: true
    active?: true
  }

  export type SpotsMinAggregateInputType = {
    id_spot?: true
    entity_id?: true
    name?: true
    description?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type SpotsMaxAggregateInputType = {
    id_spot?: true
    entity_id?: true
    name?: true
    description?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type SpotsCountAggregateInputType = {
    id_spot?: true
    entity_id?: true
    name?: true
    description?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SpotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spots to aggregate.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spots
    **/
    _count?: true | SpotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotsMaxAggregateInputType
  }

  export type GetSpotsAggregateType<T extends SpotsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpots[P]>
      : GetScalarType<T[P], AggregateSpots[P]>
  }




  export type spotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spotsWhereInput
    orderBy?: spotsOrderByWithAggregationInput | spotsOrderByWithAggregationInput[]
    by: SpotsScalarFieldEnum[] | SpotsScalarFieldEnum
    having?: spotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotsCountAggregateInputType | true
    _avg?: SpotsAvgAggregateInputType
    _sum?: SpotsSumAggregateInputType
    _min?: SpotsMinAggregateInputType
    _max?: SpotsMaxAggregateInputType
  }

  export type SpotsGroupByOutputType = {
    id_spot: number
    entity_id: number
    name: string
    description: string | null
    active: number
    created_at: Date | null
    updated_at: Date | null
    _count: SpotsCountAggregateOutputType | null
    _avg: SpotsAvgAggregateOutputType | null
    _sum: SpotsSumAggregateOutputType | null
    _min: SpotsMinAggregateOutputType | null
    _max: SpotsMaxAggregateOutputType | null
  }

  type GetSpotsGroupByPayload<T extends spotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotsGroupByOutputType[P]>
            : GetScalarType<T[P], SpotsGroupByOutputType[P]>
        }
      >
    >


  export type spotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_spot?: boolean
    entity_id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    users?: boolean | spots$usersArgs<ExtArgs>
    _count?: boolean | SpotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spots"]>



  export type spotsSelectScalar = {
    id_spot?: boolean
    entity_id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type spotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_spot" | "entity_id" | "name" | "description" | "active" | "created_at" | "updated_at", ExtArgs["result"]["spots"]>
  export type spotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    users?: boolean | spots$usersArgs<ExtArgs>
    _count?: boolean | SpotsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $spotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spots"
    objects: {
      entities: Prisma.$entitiesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_spot: number
      entity_id: number
      name: string
      description: string | null
      active: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["spots"]>
    composites: {}
  }

  type spotsGetPayload<S extends boolean | null | undefined | spotsDefaultArgs> = $Result.GetResult<Prisma.$spotsPayload, S>

  type spotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpotsCountAggregateInputType | true
    }

  export interface spotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spots'], meta: { name: 'spots' } }
    /**
     * Find zero or one Spots that matches the filter.
     * @param {spotsFindUniqueArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spotsFindUniqueArgs>(args: SelectSubset<T, spotsFindUniqueArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spotsFindUniqueOrThrowArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spotsFindUniqueOrThrowArgs>(args: SelectSubset<T, spotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsFindFirstArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spotsFindFirstArgs>(args?: SelectSubset<T, spotsFindFirstArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsFindFirstOrThrowArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spotsFindFirstOrThrowArgs>(args?: SelectSubset<T, spotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spots
     * const spots = await prisma.spots.findMany()
     * 
     * // Get first 10 Spots
     * const spots = await prisma.spots.findMany({ take: 10 })
     * 
     * // Only select the `id_spot`
     * const spotsWithId_spotOnly = await prisma.spots.findMany({ select: { id_spot: true } })
     * 
     */
    findMany<T extends spotsFindManyArgs>(args?: SelectSubset<T, spotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spots.
     * @param {spotsCreateArgs} args - Arguments to create a Spots.
     * @example
     * // Create one Spots
     * const Spots = await prisma.spots.create({
     *   data: {
     *     // ... data to create a Spots
     *   }
     * })
     * 
     */
    create<T extends spotsCreateArgs>(args: SelectSubset<T, spotsCreateArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spots.
     * @param {spotsCreateManyArgs} args - Arguments to create many Spots.
     * @example
     * // Create many Spots
     * const spots = await prisma.spots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spotsCreateManyArgs>(args?: SelectSubset<T, spotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spots.
     * @param {spotsDeleteArgs} args - Arguments to delete one Spots.
     * @example
     * // Delete one Spots
     * const Spots = await prisma.spots.delete({
     *   where: {
     *     // ... filter to delete one Spots
     *   }
     * })
     * 
     */
    delete<T extends spotsDeleteArgs>(args: SelectSubset<T, spotsDeleteArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spots.
     * @param {spotsUpdateArgs} args - Arguments to update one Spots.
     * @example
     * // Update one Spots
     * const spots = await prisma.spots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spotsUpdateArgs>(args: SelectSubset<T, spotsUpdateArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spots.
     * @param {spotsDeleteManyArgs} args - Arguments to filter Spots to delete.
     * @example
     * // Delete a few Spots
     * const { count } = await prisma.spots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spotsDeleteManyArgs>(args?: SelectSubset<T, spotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spots
     * const spots = await prisma.spots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spotsUpdateManyArgs>(args: SelectSubset<T, spotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spots.
     * @param {spotsUpsertArgs} args - Arguments to update or create a Spots.
     * @example
     * // Update or create a Spots
     * const spots = await prisma.spots.upsert({
     *   create: {
     *     // ... data to create a Spots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spots we want to update
     *   }
     * })
     */
    upsert<T extends spotsUpsertArgs>(args: SelectSubset<T, spotsUpsertArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsCountArgs} args - Arguments to filter Spots to count.
     * @example
     * // Count the number of Spots
     * const count = await prisma.spots.count({
     *   where: {
     *     // ... the filter for the Spots we want to count
     *   }
     * })
    **/
    count<T extends spotsCountArgs>(
      args?: Subset<T, spotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotsAggregateArgs>(args: Subset<T, SpotsAggregateArgs>): Prisma.PrismaPromise<GetSpotsAggregateType<T>>

    /**
     * Group by Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsGroupByArgs} args - Group by arguments.
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
      T extends spotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spotsGroupByArgs['orderBy'] }
        : { orderBy?: spotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spots model
   */
  readonly fields: spotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entities<T extends entitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entitiesDefaultArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends spots$usersArgs<ExtArgs> = {}>(args?: Subset<T, spots$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the spots model
   */
  interface spotsFieldRefs {
    readonly id_spot: FieldRef<"spots", 'Int'>
    readonly entity_id: FieldRef<"spots", 'Int'>
    readonly name: FieldRef<"spots", 'String'>
    readonly description: FieldRef<"spots", 'String'>
    readonly active: FieldRef<"spots", 'Int'>
    readonly created_at: FieldRef<"spots", 'DateTime'>
    readonly updated_at: FieldRef<"spots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * spots findUnique
   */
  export type spotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots findUniqueOrThrow
   */
  export type spotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots findFirst
   */
  export type spotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spots.
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spots.
     */
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * spots findFirstOrThrow
   */
  export type spotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spots.
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spots.
     */
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * spots findMany
   */
  export type spotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spots.
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * spots create
   */
  export type spotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * The data needed to create a spots.
     */
    data: XOR<spotsCreateInput, spotsUncheckedCreateInput>
  }

  /**
   * spots createMany
   */
  export type spotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spots.
     */
    data: spotsCreateManyInput | spotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spots update
   */
  export type spotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * The data needed to update a spots.
     */
    data: XOR<spotsUpdateInput, spotsUncheckedUpdateInput>
    /**
     * Choose, which spots to update.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots updateMany
   */
  export type spotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spots.
     */
    data: XOR<spotsUpdateManyMutationInput, spotsUncheckedUpdateManyInput>
    /**
     * Filter which spots to update
     */
    where?: spotsWhereInput
    /**
     * Limit how many spots to update.
     */
    limit?: number
  }

  /**
   * spots upsert
   */
  export type spotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * The filter to search for the spots to update in case it exists.
     */
    where: spotsWhereUniqueInput
    /**
     * In case the spots found by the `where` argument doesn't exist, create a new spots with this data.
     */
    create: XOR<spotsCreateInput, spotsUncheckedCreateInput>
    /**
     * In case the spots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spotsUpdateInput, spotsUncheckedUpdateInput>
  }

  /**
   * spots delete
   */
  export type spotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter which spots to delete.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots deleteMany
   */
  export type spotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spots to delete
     */
    where?: spotsWhereInput
    /**
     * Limit how many spots to delete.
     */
    limit?: number
  }

  /**
   * spots.users
   */
  export type spots$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * spots without action
   */
  export type spotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
  }


  /**
   * Model tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    id_token: number | null
    user_id: number | null
    revoked: number | null
    active: number | null
  }

  export type TokensSumAggregateOutputType = {
    id_token: number | null
    user_id: number | null
    revoked: number | null
    active: number | null
  }

  export type TokensMinAggregateOutputType = {
    id_token: number | null
    user_id: number | null
    r_token: string | null
    access_token: string | null
    exec_token: string | null
    revoked: number | null
    expires_at: Date | null
    status: string | null
    active: number | null
    created_at: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id_token: number | null
    user_id: number | null
    r_token: string | null
    access_token: string | null
    exec_token: string | null
    revoked: number | null
    expires_at: Date | null
    status: string | null
    active: number | null
    created_at: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id_token: number
    user_id: number
    r_token: number
    access_token: number
    exec_token: number
    revoked: number
    expires_at: number
    status: number
    active: number
    created_at: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    id_token?: true
    user_id?: true
    revoked?: true
    active?: true
  }

  export type TokensSumAggregateInputType = {
    id_token?: true
    user_id?: true
    revoked?: true
    active?: true
  }

  export type TokensMinAggregateInputType = {
    id_token?: true
    user_id?: true
    r_token?: true
    access_token?: true
    exec_token?: true
    revoked?: true
    expires_at?: true
    status?: true
    active?: true
    created_at?: true
  }

  export type TokensMaxAggregateInputType = {
    id_token?: true
    user_id?: true
    r_token?: true
    access_token?: true
    exec_token?: true
    revoked?: true
    expires_at?: true
    status?: true
    active?: true
    created_at?: true
  }

  export type TokensCountAggregateInputType = {
    id_token?: true
    user_id?: true
    r_token?: true
    access_token?: true
    exec_token?: true
    revoked?: true
    expires_at?: true
    status?: true
    active?: true
    created_at?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to aggregate.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokensWhereInput
    orderBy?: tokensOrderByWithAggregationInput | tokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id_token: number
    user_id: number
    r_token: string
    access_token: string | null
    exec_token: string | null
    revoked: number
    expires_at: Date | null
    status: string | null
    active: number
    created_at: Date | null
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_token?: boolean
    user_id?: boolean
    r_token?: boolean
    access_token?: boolean
    exec_token?: boolean
    revoked?: boolean
    expires_at?: boolean
    status?: boolean
    active?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    logins?: boolean | tokens$loginsArgs<ExtArgs>
    _count?: boolean | TokensCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>



  export type tokensSelectScalar = {
    id_token?: boolean
    user_id?: boolean
    r_token?: boolean
    access_token?: boolean
    exec_token?: boolean
    revoked?: boolean
    expires_at?: boolean
    status?: boolean
    active?: boolean
    created_at?: boolean
  }

  export type tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_token" | "user_id" | "r_token" | "access_token" | "exec_token" | "revoked" | "expires_at" | "status" | "active" | "created_at", ExtArgs["result"]["tokens"]>
  export type tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    logins?: boolean | tokens$loginsArgs<ExtArgs>
    _count?: boolean | TokensCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokens"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      logins: Prisma.$loginsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_token: number
      user_id: number
      r_token: string
      access_token: string | null
      exec_token: string | null
      revoked: number
      expires_at: Date | null
      status: string | null
      active: number
      created_at: Date | null
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type tokensGetPayload<S extends boolean | null | undefined | tokensDefaultArgs> = $Result.GetResult<Prisma.$tokensPayload, S>

  type tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokens'], meta: { name: 'tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {tokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokensFindUniqueArgs>(args: SelectSubset<T, tokensFindUniqueArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokensFindFirstArgs>(args?: SelectSubset<T, tokensFindFirstArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id_token`
     * const tokensWithId_tokenOnly = await prisma.tokens.findMany({ select: { id_token: true } })
     * 
     */
    findMany<T extends tokensFindManyArgs>(args?: SelectSubset<T, tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {tokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends tokensCreateArgs>(args: SelectSubset<T, tokensCreateArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {tokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokensCreateManyArgs>(args?: SelectSubset<T, tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokens.
     * @param {tokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends tokensDeleteArgs>(args: SelectSubset<T, tokensDeleteArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {tokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokensUpdateArgs>(args: SelectSubset<T, tokensUpdateArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {tokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokensDeleteManyArgs>(args?: SelectSubset<T, tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokensUpdateManyArgs>(args: SelectSubset<T, tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {tokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends tokensUpsertArgs>(args: SelectSubset<T, tokensUpsertArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokensCountArgs>(
      args?: Subset<T, tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensGroupByArgs} args - Group by arguments.
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
      T extends tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokensGroupByArgs['orderBy'] }
        : { orderBy?: tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokens model
   */
  readonly fields: tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logins<T extends tokens$loginsArgs<ExtArgs> = {}>(args?: Subset<T, tokens$loginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tokens model
   */
  interface tokensFieldRefs {
    readonly id_token: FieldRef<"tokens", 'Int'>
    readonly user_id: FieldRef<"tokens", 'Int'>
    readonly r_token: FieldRef<"tokens", 'String'>
    readonly access_token: FieldRef<"tokens", 'String'>
    readonly exec_token: FieldRef<"tokens", 'String'>
    readonly revoked: FieldRef<"tokens", 'Int'>
    readonly expires_at: FieldRef<"tokens", 'DateTime'>
    readonly status: FieldRef<"tokens", 'String'>
    readonly active: FieldRef<"tokens", 'Int'>
    readonly created_at: FieldRef<"tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tokens findUnique
   */
  export type tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findUniqueOrThrow
   */
  export type tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findFirst
   */
  export type tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens findFirstOrThrow
   */
  export type tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens findMany
   */
  export type tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens create
   */
  export type tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a tokens.
     */
    data: XOR<tokensCreateInput, tokensUncheckedCreateInput>
  }

  /**
   * tokens createMany
   */
  export type tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokensCreateManyInput | tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokens update
   */
  export type tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a tokens.
     */
    data: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
    /**
     * Choose, which tokens to update.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens updateMany
   */
  export type tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * tokens upsert
   */
  export type tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the tokens to update in case it exists.
     */
    where: tokensWhereUniqueInput
    /**
     * In case the tokens found by the `where` argument doesn't exist, create a new tokens with this data.
     */
    create: XOR<tokensCreateInput, tokensUncheckedCreateInput>
    /**
     * In case the tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
  }

  /**
   * tokens delete
   */
  export type tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter which tokens to delete.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens deleteMany
   */
  export type tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to delete.
     */
    limit?: number
  }

  /**
   * tokens.logins
   */
  export type tokens$loginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    where?: loginsWhereInput
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    cursor?: loginsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * tokens without action
   */
  export type tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id_user: number | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_user: number | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: number | null
    email: string | null
    password: string | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: number | null
    email: string | null
    password: string | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    email: number
    password: number
    role_id: number
    entity_id: number
    spot_id: number
    profile_id: number
    last_login_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_user?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
  }

  export type UsersSumAggregateInputType = {
    id_user?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
  }

  export type UsersMinAggregateInputType = {
    id_user?: true
    email?: true
    password?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    email?: true
    password?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    email?: true
    password?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id: number | null
    profile_id: number | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    entity_id?: boolean
    spot_id?: boolean
    profile_id?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tokens?: boolean | users$tokensArgs<ExtArgs>
    logs?: boolean | users$logsArgs<ExtArgs>
    logins?: boolean | users$loginsArgs<ExtArgs>
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    profiles?: boolean | users$profilesArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    spots?: boolean | users$spotsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id_user?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    entity_id?: boolean
    spot_id?: boolean
    profile_id?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "email" | "password" | "role_id" | "entity_id" | "spot_id" | "profile_id" | "last_login_at" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | users$tokensArgs<ExtArgs>
    logs?: boolean | users$logsArgs<ExtArgs>
    logins?: boolean | users$loginsArgs<ExtArgs>
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    profiles?: boolean | users$profilesArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    spots?: boolean | users$spotsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      tokens: Prisma.$tokensPayload<ExtArgs>[]
      logs: Prisma.$logsPayload<ExtArgs>[]
      logins: Prisma.$loginsPayload<ExtArgs>[]
      entities: Prisma.$entitiesPayload<ExtArgs>
      profiles: Prisma.$profilesPayload<ExtArgs> | null
      roles: Prisma.$rolesPayload<ExtArgs>
      spots: Prisma.$spotsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      email: string
      password: string
      role_id: number
      entity_id: number
      spot_id: number | null
      profile_id: number | null
      last_login_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends users$tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends users$logsArgs<ExtArgs> = {}>(args?: Subset<T, users$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logins<T extends users$loginsArgs<ExtArgs> = {}>(args?: Subset<T, users$loginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entities<T extends entitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entitiesDefaultArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profiles<T extends users$profilesArgs<ExtArgs> = {}>(args?: Subset<T, users$profilesArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spots<T extends users$spotsArgs<ExtArgs> = {}>(args?: Subset<T, users$spotsArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_user: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role_id: FieldRef<"users", 'Int'>
    readonly entity_id: FieldRef<"users", 'Int'>
    readonly spot_id: FieldRef<"users", 'Int'>
    readonly profile_id: FieldRef<"users", 'Int'>
    readonly last_login_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.tokens
   */
  export type users$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    where?: tokensWhereInput
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    cursor?: tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * users.logs
   */
  export type users$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    where?: logsWhereInput
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    cursor?: logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * users.logins
   */
  export type users$loginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    where?: loginsWhereInput
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    cursor?: loginsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * users.profiles
   */
  export type users$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * users.spots
   */
  export type users$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    where?: spotsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id_log: number | null
    user_id: number | null
  }

  export type LogsSumAggregateOutputType = {
    id_log: number | null
    user_id: number | null
  }

  export type LogsMinAggregateOutputType = {
    id_log: number | null
    user_id: number | null
    action: string | null
    description: string | null
    created_at: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id_log: number | null
    user_id: number | null
    action: string | null
    description: string | null
    created_at: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id_log: number
    user_id: number
    action: number
    description: number
    created_at: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id_log?: true
    user_id?: true
  }

  export type LogsSumAggregateInputType = {
    id_log?: true
    user_id?: true
  }

  export type LogsMinAggregateInputType = {
    id_log?: true
    user_id?: true
    action?: true
    description?: true
    created_at?: true
  }

  export type LogsMaxAggregateInputType = {
    id_log?: true
    user_id?: true
    action?: true
    description?: true
    created_at?: true
  }

  export type LogsCountAggregateInputType = {
    id_log?: true
    user_id?: true
    action?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id_log: number
    user_id: number | null
    action: string
    description: string | null
    created_at: Date | null
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    user_id?: boolean
    action?: boolean
    description?: boolean
    created_at?: boolean
    users?: boolean | logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>



  export type logsSelectScalar = {
    id_log?: boolean
    user_id?: boolean
    action?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_log" | "user_id" | "action" | "description" | "created_at", ExtArgs["result"]["logs"]>
  export type logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | logs$usersArgs<ExtArgs>
  }

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_log: number
      user_id: number | null
      action: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id_log`
     * const logsWithId_logOnly = await prisma.logs.findMany({ select: { id_log: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
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
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends logs$usersArgs<ExtArgs> = {}>(args?: Subset<T, logs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id_log: FieldRef<"logs", 'Int'>
    readonly user_id: FieldRef<"logs", 'Int'>
    readonly action: FieldRef<"logs", 'String'>
    readonly description: FieldRef<"logs", 'String'>
    readonly created_at: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs.users
   */
  export type logs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
  }


  /**
   * Model logins
   */

  export type AggregateLogins = {
    _count: LoginsCountAggregateOutputType | null
    _avg: LoginsAvgAggregateOutputType | null
    _sum: LoginsSumAggregateOutputType | null
    _min: LoginsMinAggregateOutputType | null
    _max: LoginsMaxAggregateOutputType | null
  }

  export type LoginsAvgAggregateOutputType = {
    id_login: number | null
    id_user: number | null
    id_token: number | null
    attempts: number | null
  }

  export type LoginsSumAggregateOutputType = {
    id_login: number | null
    id_user: number | null
    id_token: number | null
    attempts: number | null
  }

  export type LoginsMinAggregateOutputType = {
    id_login: number | null
    id_user: number | null
    id_token: number | null
    attempts: number | null
    state: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LoginsMaxAggregateOutputType = {
    id_login: number | null
    id_user: number | null
    id_token: number | null
    attempts: number | null
    state: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LoginsCountAggregateOutputType = {
    id_login: number
    id_user: number
    id_token: number
    attempts: number
    state: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LoginsAvgAggregateInputType = {
    id_login?: true
    id_user?: true
    id_token?: true
    attempts?: true
  }

  export type LoginsSumAggregateInputType = {
    id_login?: true
    id_user?: true
    id_token?: true
    attempts?: true
  }

  export type LoginsMinAggregateInputType = {
    id_login?: true
    id_user?: true
    id_token?: true
    attempts?: true
    state?: true
    created_at?: true
    updated_at?: true
  }

  export type LoginsMaxAggregateInputType = {
    id_login?: true
    id_user?: true
    id_token?: true
    attempts?: true
    state?: true
    created_at?: true
    updated_at?: true
  }

  export type LoginsCountAggregateInputType = {
    id_login?: true
    id_user?: true
    id_token?: true
    attempts?: true
    state?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LoginsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logins to aggregate.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logins
    **/
    _count?: true | LoginsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginsMaxAggregateInputType
  }

  export type GetLoginsAggregateType<T extends LoginsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogins[P]>
      : GetScalarType<T[P], AggregateLogins[P]>
  }




  export type loginsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginsWhereInput
    orderBy?: loginsOrderByWithAggregationInput | loginsOrderByWithAggregationInput[]
    by: LoginsScalarFieldEnum[] | LoginsScalarFieldEnum
    having?: loginsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginsCountAggregateInputType | true
    _avg?: LoginsAvgAggregateInputType
    _sum?: LoginsSumAggregateInputType
    _min?: LoginsMinAggregateInputType
    _max?: LoginsMaxAggregateInputType
  }

  export type LoginsGroupByOutputType = {
    id_login: number
    id_user: number
    id_token: number | null
    attempts: number
    state: string
    created_at: Date | null
    updated_at: Date | null
    _count: LoginsCountAggregateOutputType | null
    _avg: LoginsAvgAggregateOutputType | null
    _sum: LoginsSumAggregateOutputType | null
    _min: LoginsMinAggregateOutputType | null
    _max: LoginsMaxAggregateOutputType | null
  }

  type GetLoginsGroupByPayload<T extends loginsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginsGroupByOutputType[P]>
            : GetScalarType<T[P], LoginsGroupByOutputType[P]>
        }
      >
    >


  export type loginsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_login?: boolean
    id_user?: boolean
    id_token?: boolean
    attempts?: boolean
    state?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tokens?: boolean | logins$tokensArgs<ExtArgs>
  }, ExtArgs["result"]["logins"]>



  export type loginsSelectScalar = {
    id_login?: boolean
    id_user?: boolean
    id_token?: boolean
    attempts?: boolean
    state?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type loginsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_login" | "id_user" | "id_token" | "attempts" | "state" | "created_at" | "updated_at", ExtArgs["result"]["logins"]>
  export type loginsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tokens?: boolean | logins$tokensArgs<ExtArgs>
  }

  export type $loginsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logins"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      tokens: Prisma.$tokensPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_login: number
      id_user: number
      id_token: number | null
      attempts: number
      state: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["logins"]>
    composites: {}
  }

  type loginsGetPayload<S extends boolean | null | undefined | loginsDefaultArgs> = $Result.GetResult<Prisma.$loginsPayload, S>

  type loginsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loginsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginsCountAggregateInputType | true
    }

  export interface loginsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logins'], meta: { name: 'logins' } }
    /**
     * Find zero or one Logins that matches the filter.
     * @param {loginsFindUniqueArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loginsFindUniqueArgs>(args: SelectSubset<T, loginsFindUniqueArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loginsFindUniqueOrThrowArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loginsFindUniqueOrThrowArgs>(args: SelectSubset<T, loginsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsFindFirstArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loginsFindFirstArgs>(args?: SelectSubset<T, loginsFindFirstArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsFindFirstOrThrowArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loginsFindFirstOrThrowArgs>(args?: SelectSubset<T, loginsFindFirstOrThrowArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.logins.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.logins.findMany({ take: 10 })
     * 
     * // Only select the `id_login`
     * const loginsWithId_loginOnly = await prisma.logins.findMany({ select: { id_login: true } })
     * 
     */
    findMany<T extends loginsFindManyArgs>(args?: SelectSubset<T, loginsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logins.
     * @param {loginsCreateArgs} args - Arguments to create a Logins.
     * @example
     * // Create one Logins
     * const Logins = await prisma.logins.create({
     *   data: {
     *     // ... data to create a Logins
     *   }
     * })
     * 
     */
    create<T extends loginsCreateArgs>(args: SelectSubset<T, loginsCreateArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logins.
     * @param {loginsCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const logins = await prisma.logins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loginsCreateManyArgs>(args?: SelectSubset<T, loginsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logins.
     * @param {loginsDeleteArgs} args - Arguments to delete one Logins.
     * @example
     * // Delete one Logins
     * const Logins = await prisma.logins.delete({
     *   where: {
     *     // ... filter to delete one Logins
     *   }
     * })
     * 
     */
    delete<T extends loginsDeleteArgs>(args: SelectSubset<T, loginsDeleteArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logins.
     * @param {loginsUpdateArgs} args - Arguments to update one Logins.
     * @example
     * // Update one Logins
     * const logins = await prisma.logins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loginsUpdateArgs>(args: SelectSubset<T, loginsUpdateArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logins.
     * @param {loginsDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.logins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loginsDeleteManyArgs>(args?: SelectSubset<T, loginsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const logins = await prisma.logins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loginsUpdateManyArgs>(args: SelectSubset<T, loginsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logins.
     * @param {loginsUpsertArgs} args - Arguments to update or create a Logins.
     * @example
     * // Update or create a Logins
     * const logins = await prisma.logins.upsert({
     *   create: {
     *     // ... data to create a Logins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logins we want to update
     *   }
     * })
     */
    upsert<T extends loginsUpsertArgs>(args: SelectSubset<T, loginsUpsertArgs<ExtArgs>>): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.logins.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends loginsCountArgs>(
      args?: Subset<T, loginsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginsAggregateArgs>(args: Subset<T, LoginsAggregateArgs>): Prisma.PrismaPromise<GetLoginsAggregateType<T>>

    /**
     * Group by Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsGroupByArgs} args - Group by arguments.
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
      T extends loginsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loginsGroupByArgs['orderBy'] }
        : { orderBy?: loginsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loginsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logins model
   */
  readonly fields: loginsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loginsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tokens<T extends logins$tokensArgs<ExtArgs> = {}>(args?: Subset<T, logins$tokensArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the logins model
   */
  interface loginsFieldRefs {
    readonly id_login: FieldRef<"logins", 'Int'>
    readonly id_user: FieldRef<"logins", 'Int'>
    readonly id_token: FieldRef<"logins", 'Int'>
    readonly attempts: FieldRef<"logins", 'Int'>
    readonly state: FieldRef<"logins", 'String'>
    readonly created_at: FieldRef<"logins", 'DateTime'>
    readonly updated_at: FieldRef<"logins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logins findUnique
   */
  export type loginsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins findUniqueOrThrow
   */
  export type loginsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins findFirst
   */
  export type loginsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * logins findFirstOrThrow
   */
  export type loginsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * logins findMany
   */
  export type loginsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logins.
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * logins create
   */
  export type loginsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * The data needed to create a logins.
     */
    data: XOR<loginsCreateInput, loginsUncheckedCreateInput>
  }

  /**
   * logins createMany
   */
  export type loginsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logins.
     */
    data: loginsCreateManyInput | loginsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logins update
   */
  export type loginsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * The data needed to update a logins.
     */
    data: XOR<loginsUpdateInput, loginsUncheckedUpdateInput>
    /**
     * Choose, which logins to update.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins updateMany
   */
  export type loginsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logins.
     */
    data: XOR<loginsUpdateManyMutationInput, loginsUncheckedUpdateManyInput>
    /**
     * Filter which logins to update
     */
    where?: loginsWhereInput
    /**
     * Limit how many logins to update.
     */
    limit?: number
  }

  /**
   * logins upsert
   */
  export type loginsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * The filter to search for the logins to update in case it exists.
     */
    where: loginsWhereUniqueInput
    /**
     * In case the logins found by the `where` argument doesn't exist, create a new logins with this data.
     */
    create: XOR<loginsCreateInput, loginsUncheckedCreateInput>
    /**
     * In case the logins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loginsUpdateInput, loginsUncheckedUpdateInput>
  }

  /**
   * logins delete
   */
  export type loginsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
    /**
     * Filter which logins to delete.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins deleteMany
   */
  export type loginsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logins to delete
     */
    where?: loginsWhereInput
    /**
     * Limit how many logins to delete.
     */
    limit?: number
  }

  /**
   * logins.tokens
   */
  export type logins$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    where?: tokensWhereInput
  }

  /**
   * logins without action
   */
  export type loginsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logins
     */
    omit?: loginsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loginsInclude<ExtArgs> | null
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


  export const EntitiesScalarFieldEnum: {
    id_entity: 'id_entity',
    name: 'name',
    type: 'type',
    description: 'description',
    number: 'number',
    size: 'size',
    logo_url: 'logo_url',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EntitiesScalarFieldEnum = (typeof EntitiesScalarFieldEnum)[keyof typeof EntitiesScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id_profile: 'id_profile',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    bio: 'bio',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id_role: 'id_role',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const SpotsScalarFieldEnum: {
    id_spot: 'id_spot',
    entity_id: 'entity_id',
    name: 'name',
    description: 'description',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SpotsScalarFieldEnum = (typeof SpotsScalarFieldEnum)[keyof typeof SpotsScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id_token: 'id_token',
    user_id: 'user_id',
    r_token: 'r_token',
    access_token: 'access_token',
    exec_token: 'exec_token',
    revoked: 'revoked',
    expires_at: 'expires_at',
    status: 'status',
    active: 'active',
    created_at: 'created_at'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    email: 'email',
    password: 'password',
    role_id: 'role_id',
    entity_id: 'entity_id',
    spot_id: 'spot_id',
    profile_id: 'profile_id',
    last_login_at: 'last_login_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id_log: 'id_log',
    user_id: 'user_id',
    action: 'action',
    description: 'description',
    created_at: 'created_at'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const LoginsScalarFieldEnum: {
    id_login: 'id_login',
    id_user: 'id_user',
    id_token: 'id_token',
    attempts: 'attempts',
    state: 'state',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LoginsScalarFieldEnum = (typeof LoginsScalarFieldEnum)[keyof typeof LoginsScalarFieldEnum]


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


  export const entitiesOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type',
    description: 'description',
    number: 'number',
    size: 'size',
    logo_url: 'logo_url'
  };

  export type entitiesOrderByRelevanceFieldEnum = (typeof entitiesOrderByRelevanceFieldEnum)[keyof typeof entitiesOrderByRelevanceFieldEnum]


  export const profilesOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    bio: 'bio'
  };

  export type profilesOrderByRelevanceFieldEnum = (typeof profilesOrderByRelevanceFieldEnum)[keyof typeof profilesOrderByRelevanceFieldEnum]


  export const rolesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum]


  export const spotsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type spotsOrderByRelevanceFieldEnum = (typeof spotsOrderByRelevanceFieldEnum)[keyof typeof spotsOrderByRelevanceFieldEnum]


  export const tokensOrderByRelevanceFieldEnum: {
    r_token: 'r_token',
    access_token: 'access_token',
    exec_token: 'exec_token',
    status: 'status'
  };

  export type tokensOrderByRelevanceFieldEnum = (typeof tokensOrderByRelevanceFieldEnum)[keyof typeof tokensOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const logsOrderByRelevanceFieldEnum: {
    action: 'action',
    description: 'description'
  };

  export type logsOrderByRelevanceFieldEnum = (typeof logsOrderByRelevanceFieldEnum)[keyof typeof logsOrderByRelevanceFieldEnum]


  export const loginsOrderByRelevanceFieldEnum: {
    state: 'state'
  };

  export type loginsOrderByRelevanceFieldEnum = (typeof loginsOrderByRelevanceFieldEnum)[keyof typeof loginsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type entitiesWhereInput = {
    AND?: entitiesWhereInput | entitiesWhereInput[]
    OR?: entitiesWhereInput[]
    NOT?: entitiesWhereInput | entitiesWhereInput[]
    id_entity?: IntFilter<"entities"> | number
    name?: StringFilter<"entities"> | string
    type?: StringFilter<"entities"> | string
    description?: StringNullableFilter<"entities"> | string | null
    number?: StringNullableFilter<"entities"> | string | null
    size?: StringNullableFilter<"entities"> | string | null
    logo_url?: StringNullableFilter<"entities"> | string | null
    active?: IntFilter<"entities"> | number
    created_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    spots?: SpotsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type entitiesOrderByWithRelationInput = {
    id_entity?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    spots?: spotsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: entitiesOrderByRelevanceInput
  }

  export type entitiesWhereUniqueInput = Prisma.AtLeast<{
    id_entity?: number
    AND?: entitiesWhereInput | entitiesWhereInput[]
    OR?: entitiesWhereInput[]
    NOT?: entitiesWhereInput | entitiesWhereInput[]
    name?: StringFilter<"entities"> | string
    type?: StringFilter<"entities"> | string
    description?: StringNullableFilter<"entities"> | string | null
    number?: StringNullableFilter<"entities"> | string | null
    size?: StringNullableFilter<"entities"> | string | null
    logo_url?: StringNullableFilter<"entities"> | string | null
    active?: IntFilter<"entities"> | number
    created_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    spots?: SpotsListRelationFilter
    users?: UsersListRelationFilter
  }, "id_entity">

  export type entitiesOrderByWithAggregationInput = {
    id_entity?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: entitiesCountOrderByAggregateInput
    _avg?: entitiesAvgOrderByAggregateInput
    _max?: entitiesMaxOrderByAggregateInput
    _min?: entitiesMinOrderByAggregateInput
    _sum?: entitiesSumOrderByAggregateInput
  }

  export type entitiesScalarWhereWithAggregatesInput = {
    AND?: entitiesScalarWhereWithAggregatesInput | entitiesScalarWhereWithAggregatesInput[]
    OR?: entitiesScalarWhereWithAggregatesInput[]
    NOT?: entitiesScalarWhereWithAggregatesInput | entitiesScalarWhereWithAggregatesInput[]
    id_entity?: IntWithAggregatesFilter<"entities"> | number
    name?: StringWithAggregatesFilter<"entities"> | string
    type?: StringWithAggregatesFilter<"entities"> | string
    description?: StringNullableWithAggregatesFilter<"entities"> | string | null
    number?: StringNullableWithAggregatesFilter<"entities"> | string | null
    size?: StringNullableWithAggregatesFilter<"entities"> | string | null
    logo_url?: StringNullableWithAggregatesFilter<"entities"> | string | null
    active?: IntWithAggregatesFilter<"entities"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"entities"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"entities"> | Date | string | null
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id_profile?: IntFilter<"profiles"> | number
    first_name?: StringNullableFilter<"profiles"> | string | null
    last_name?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    avatar_url?: StringNullableFilter<"profiles"> | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    users?: UsersListRelationFilter
  }

  export type profilesOrderByWithRelationInput = {
    id_profile?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: profilesOrderByRelevanceInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id_profile?: number
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    first_name?: StringNullableFilter<"profiles"> | string | null
    last_name?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    avatar_url?: StringNullableFilter<"profiles"> | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    users?: UsersListRelationFilter
  }, "id_profile">

  export type profilesOrderByWithAggregationInput = {
    id_profile?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
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
    id_profile?: IntWithAggregatesFilter<"profiles"> | number
    first_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    phone?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    bio?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id_role?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    description?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: rolesOrderByRelevanceInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id_role?: number
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    description?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    users?: UsersListRelationFilter
  }, "id_role" | "name">

  export type rolesOrderByWithAggregationInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id_role?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
    description?: StringNullableWithAggregatesFilter<"roles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type spotsWhereInput = {
    AND?: spotsWhereInput | spotsWhereInput[]
    OR?: spotsWhereInput[]
    NOT?: spotsWhereInput | spotsWhereInput[]
    id_spot?: IntFilter<"spots"> | number
    entity_id?: IntFilter<"spots"> | number
    name?: StringFilter<"spots"> | string
    description?: StringNullableFilter<"spots"> | string | null
    active?: IntFilter<"spots"> | number
    created_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    users?: UsersListRelationFilter
  }

  export type spotsOrderByWithRelationInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    entities?: entitiesOrderByWithRelationInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: spotsOrderByRelevanceInput
  }

  export type spotsWhereUniqueInput = Prisma.AtLeast<{
    id_spot?: number
    AND?: spotsWhereInput | spotsWhereInput[]
    OR?: spotsWhereInput[]
    NOT?: spotsWhereInput | spotsWhereInput[]
    entity_id?: IntFilter<"spots"> | number
    name?: StringFilter<"spots"> | string
    description?: StringNullableFilter<"spots"> | string | null
    active?: IntFilter<"spots"> | number
    created_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    users?: UsersListRelationFilter
  }, "id_spot">

  export type spotsOrderByWithAggregationInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: spotsCountOrderByAggregateInput
    _avg?: spotsAvgOrderByAggregateInput
    _max?: spotsMaxOrderByAggregateInput
    _min?: spotsMinOrderByAggregateInput
    _sum?: spotsSumOrderByAggregateInput
  }

  export type spotsScalarWhereWithAggregatesInput = {
    AND?: spotsScalarWhereWithAggregatesInput | spotsScalarWhereWithAggregatesInput[]
    OR?: spotsScalarWhereWithAggregatesInput[]
    NOT?: spotsScalarWhereWithAggregatesInput | spotsScalarWhereWithAggregatesInput[]
    id_spot?: IntWithAggregatesFilter<"spots"> | number
    entity_id?: IntWithAggregatesFilter<"spots"> | number
    name?: StringWithAggregatesFilter<"spots"> | string
    description?: StringNullableWithAggregatesFilter<"spots"> | string | null
    active?: IntWithAggregatesFilter<"spots"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"spots"> | Date | string | null
  }

  export type tokensWhereInput = {
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    id_token?: IntFilter<"tokens"> | number
    user_id?: IntFilter<"tokens"> | number
    r_token?: StringFilter<"tokens"> | string
    access_token?: StringNullableFilter<"tokens"> | string | null
    exec_token?: StringNullableFilter<"tokens"> | string | null
    revoked?: IntFilter<"tokens"> | number
    expires_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    status?: StringNullableFilter<"tokens"> | string | null
    active?: IntFilter<"tokens"> | number
    created_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    logins?: LoginsListRelationFilter
  }

  export type tokensOrderByWithRelationInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    r_token?: SortOrder
    access_token?: SortOrderInput | SortOrder
    exec_token?: SortOrderInput | SortOrder
    revoked?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    logins?: loginsOrderByRelationAggregateInput
    _relevance?: tokensOrderByRelevanceInput
  }

  export type tokensWhereUniqueInput = Prisma.AtLeast<{
    id_token?: number
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    user_id?: IntFilter<"tokens"> | number
    r_token?: StringFilter<"tokens"> | string
    access_token?: StringNullableFilter<"tokens"> | string | null
    exec_token?: StringNullableFilter<"tokens"> | string | null
    revoked?: IntFilter<"tokens"> | number
    expires_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    status?: StringNullableFilter<"tokens"> | string | null
    active?: IntFilter<"tokens"> | number
    created_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    logins?: LoginsListRelationFilter
  }, "id_token">

  export type tokensOrderByWithAggregationInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    r_token?: SortOrder
    access_token?: SortOrderInput | SortOrder
    exec_token?: SortOrderInput | SortOrder
    revoked?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: tokensCountOrderByAggregateInput
    _avg?: tokensAvgOrderByAggregateInput
    _max?: tokensMaxOrderByAggregateInput
    _min?: tokensMinOrderByAggregateInput
    _sum?: tokensSumOrderByAggregateInput
  }

  export type tokensScalarWhereWithAggregatesInput = {
    AND?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    OR?: tokensScalarWhereWithAggregatesInput[]
    NOT?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    id_token?: IntWithAggregatesFilter<"tokens"> | number
    user_id?: IntWithAggregatesFilter<"tokens"> | number
    r_token?: StringWithAggregatesFilter<"tokens"> | string
    access_token?: StringNullableWithAggregatesFilter<"tokens"> | string | null
    exec_token?: StringNullableWithAggregatesFilter<"tokens"> | string | null
    revoked?: IntWithAggregatesFilter<"tokens"> | number
    expires_at?: DateTimeNullableWithAggregatesFilter<"tokens"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"tokens"> | string | null
    active?: IntWithAggregatesFilter<"tokens"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"tokens"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    entity_id?: IntFilter<"users"> | number
    spot_id?: IntNullableFilter<"users"> | number | null
    profile_id?: IntNullableFilter<"users"> | number | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    tokens?: TokensListRelationFilter
    logs?: LogsListRelationFilter
    logins?: LoginsListRelationFilter
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    spots?: XOR<SpotsNullableScalarRelationFilter, spotsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    tokens?: tokensOrderByRelationAggregateInput
    logs?: logsOrderByRelationAggregateInput
    logins?: loginsOrderByRelationAggregateInput
    entities?: entitiesOrderByWithRelationInput
    profiles?: profilesOrderByWithRelationInput
    roles?: rolesOrderByWithRelationInput
    spots?: spotsOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    entity_id?: IntFilter<"users"> | number
    spot_id?: IntNullableFilter<"users"> | number | null
    profile_id?: IntNullableFilter<"users"> | number | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    tokens?: TokensListRelationFilter
    logs?: LogsListRelationFilter
    logins?: LoginsListRelationFilter
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    spots?: XOR<SpotsNullableScalarRelationFilter, spotsWhereInput> | null
  }, "id_user" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role_id?: IntWithAggregatesFilter<"users"> | number
    entity_id?: IntWithAggregatesFilter<"users"> | number
    spot_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    profile_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    last_login_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id_log?: IntFilter<"logs"> | number
    user_id?: IntNullableFilter<"logs"> | number | null
    action?: StringFilter<"logs"> | string
    description?: StringNullableFilter<"logs"> | string | null
    created_at?: DateTimeNullableFilter<"logs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type logsOrderByWithRelationInput = {
    id_log?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: logsOrderByRelevanceInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id_log?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    user_id?: IntNullableFilter<"logs"> | number | null
    action?: StringFilter<"logs"> | string
    description?: StringNullableFilter<"logs"> | string | null
    created_at?: DateTimeNullableFilter<"logs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id_log">

  export type logsOrderByWithAggregationInput = {
    id_log?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id_log?: IntWithAggregatesFilter<"logs"> | number
    user_id?: IntNullableWithAggregatesFilter<"logs"> | number | null
    action?: StringWithAggregatesFilter<"logs"> | string
    description?: StringNullableWithAggregatesFilter<"logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
  }

  export type loginsWhereInput = {
    AND?: loginsWhereInput | loginsWhereInput[]
    OR?: loginsWhereInput[]
    NOT?: loginsWhereInput | loginsWhereInput[]
    id_login?: IntFilter<"logins"> | number
    id_user?: IntFilter<"logins"> | number
    id_token?: IntNullableFilter<"logins"> | number | null
    attempts?: IntFilter<"logins"> | number
    state?: StringFilter<"logins"> | string
    created_at?: DateTimeNullableFilter<"logins"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"logins"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tokens?: XOR<TokensNullableScalarRelationFilter, tokensWhereInput> | null
  }

  export type loginsOrderByWithRelationInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrderInput | SortOrder
    attempts?: SortOrder
    state?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    tokens?: tokensOrderByWithRelationInput
    _relevance?: loginsOrderByRelevanceInput
  }

  export type loginsWhereUniqueInput = Prisma.AtLeast<{
    id_login?: number
    id_user?: number
    AND?: loginsWhereInput | loginsWhereInput[]
    OR?: loginsWhereInput[]
    NOT?: loginsWhereInput | loginsWhereInput[]
    id_token?: IntNullableFilter<"logins"> | number | null
    attempts?: IntFilter<"logins"> | number
    state?: StringFilter<"logins"> | string
    created_at?: DateTimeNullableFilter<"logins"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"logins"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tokens?: XOR<TokensNullableScalarRelationFilter, tokensWhereInput> | null
  }, "id_login" | "id_user">

  export type loginsOrderByWithAggregationInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrderInput | SortOrder
    attempts?: SortOrder
    state?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: loginsCountOrderByAggregateInput
    _avg?: loginsAvgOrderByAggregateInput
    _max?: loginsMaxOrderByAggregateInput
    _min?: loginsMinOrderByAggregateInput
    _sum?: loginsSumOrderByAggregateInput
  }

  export type loginsScalarWhereWithAggregatesInput = {
    AND?: loginsScalarWhereWithAggregatesInput | loginsScalarWhereWithAggregatesInput[]
    OR?: loginsScalarWhereWithAggregatesInput[]
    NOT?: loginsScalarWhereWithAggregatesInput | loginsScalarWhereWithAggregatesInput[]
    id_login?: IntWithAggregatesFilter<"logins"> | number
    id_user?: IntWithAggregatesFilter<"logins"> | number
    id_token?: IntNullableWithAggregatesFilter<"logins"> | number | null
    attempts?: IntWithAggregatesFilter<"logins"> | number
    state?: StringWithAggregatesFilter<"logins"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"logins"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"logins"> | Date | string | null
  }

  export type entitiesCreateInput = {
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsCreateNestedManyWithoutEntitiesInput
    users?: usersCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUncheckedCreateInput = {
    id_entity?: number
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsUncheckedCreateNestedManyWithoutEntitiesInput
    users?: usersUncheckedCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUpdateManyWithoutEntitiesNestedInput
    users?: usersUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesUncheckedUpdateInput = {
    id_entity?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUncheckedUpdateManyWithoutEntitiesNestedInput
    users?: usersUncheckedUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesCreateManyInput = {
    id_entity?: number
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type entitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entitiesUncheckedUpdateManyInput = {
    id_entity?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesCreateInput = {
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateInput = {
    id_profile?: number
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id_profile?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type profilesCreateManyInput = {
    id_profile?: number
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profilesUpdateManyMutationInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    id_profile?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id_role?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id_role?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsCreateInput = {
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entities: entitiesCreateNestedOneWithoutSpotsInput
    users?: usersCreateNestedManyWithoutSpotsInput
  }

  export type spotsUncheckedCreateInput = {
    id_spot?: number
    entity_id: number
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutSpotsInput
  }

  export type spotsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entities?: entitiesUpdateOneRequiredWithoutSpotsNestedInput
    users?: usersUpdateManyWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateInput = {
    id_spot?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutSpotsNestedInput
  }

  export type spotsCreateManyInput = {
    id_spot?: number
    entity_id: number
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type spotsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsUncheckedUpdateManyInput = {
    id_spot?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokensCreateInput = {
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutTokensInput
    logins?: loginsCreateNestedManyWithoutTokensInput
  }

  export type tokensUncheckedCreateInput = {
    id_token?: number
    user_id: number
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
    logins?: loginsUncheckedCreateNestedManyWithoutTokensInput
  }

  export type tokensUpdateInput = {
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTokensNestedInput
    logins?: loginsUpdateManyWithoutTokensNestedInput
  }

  export type tokensUncheckedUpdateInput = {
    id_token?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logins?: loginsUncheckedUpdateManyWithoutTokensNestedInput
  }

  export type tokensCreateManyInput = {
    id_token?: number
    user_id: number
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
  }

  export type tokensUpdateManyMutationInput = {
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokensUncheckedUpdateManyInput = {
    id_token?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateInput = {
    action: string
    description?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutLogsInput
  }

  export type logsUncheckedCreateInput = {
    id_log?: number
    user_id?: number | null
    action: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type logsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutLogsNestedInput
  }

  export type logsUncheckedUpdateInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsCreateManyInput = {
    id_log?: number
    user_id?: number | null
    action: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type logsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateManyInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsCreateInput = {
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutLoginsInput
    tokens?: tokensCreateNestedOneWithoutLoginsInput
  }

  export type loginsUncheckedCreateInput = {
    id_login?: number
    id_user: number
    id_token?: number | null
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type loginsUpdateInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLoginsNestedInput
    tokens?: tokensUpdateOneWithoutLoginsNestedInput
  }

  export type loginsUncheckedUpdateInput = {
    id_login?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsCreateManyInput = {
    id_login?: number
    id_user: number
    id_token?: number | null
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type loginsUpdateManyMutationInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsUncheckedUpdateManyInput = {
    id_login?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type SpotsListRelationFilter = {
    every?: spotsWhereInput
    some?: spotsWhereInput
    none?: spotsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type spotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entitiesOrderByRelevanceInput = {
    fields: entitiesOrderByRelevanceFieldEnum | entitiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type entitiesCountOrderByAggregateInput = {
    id_entity?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    number?: SortOrder
    size?: SortOrder
    logo_url?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entitiesAvgOrderByAggregateInput = {
    id_entity?: SortOrder
    active?: SortOrder
  }

  export type entitiesMaxOrderByAggregateInput = {
    id_entity?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    number?: SortOrder
    size?: SortOrder
    logo_url?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entitiesMinOrderByAggregateInput = {
    id_entity?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    number?: SortOrder
    size?: SortOrder
    logo_url?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entitiesSumOrderByAggregateInput = {
    id_entity?: SortOrder
    active?: SortOrder
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

  export type profilesOrderByRelevanceInput = {
    fields: profilesOrderByRelevanceFieldEnum | profilesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type profilesCountOrderByAggregateInput = {
    id_profile?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    id_profile?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id_profile?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id_profile?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    id_profile?: SortOrder
  }

  export type rolesOrderByRelevanceInput = {
    fields: rolesOrderByRelevanceFieldEnum | rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolesCountOrderByAggregateInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id_role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type EntitiesScalarRelationFilter = {
    is?: entitiesWhereInput
    isNot?: entitiesWhereInput
  }

  export type spotsOrderByRelevanceInput = {
    fields: spotsOrderByRelevanceFieldEnum | spotsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type spotsCountOrderByAggregateInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type spotsAvgOrderByAggregateInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    active?: SortOrder
  }

  export type spotsMaxOrderByAggregateInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type spotsMinOrderByAggregateInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type spotsSumOrderByAggregateInput = {
    id_spot?: SortOrder
    entity_id?: SortOrder
    active?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type LoginsListRelationFilter = {
    every?: loginsWhereInput
    some?: loginsWhereInput
    none?: loginsWhereInput
  }

  export type loginsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tokensOrderByRelevanceInput = {
    fields: tokensOrderByRelevanceFieldEnum | tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tokensCountOrderByAggregateInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    r_token?: SortOrder
    access_token?: SortOrder
    exec_token?: SortOrder
    revoked?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type tokensAvgOrderByAggregateInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    revoked?: SortOrder
    active?: SortOrder
  }

  export type tokensMaxOrderByAggregateInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    r_token?: SortOrder
    access_token?: SortOrder
    exec_token?: SortOrder
    revoked?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type tokensMinOrderByAggregateInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    r_token?: SortOrder
    access_token?: SortOrder
    exec_token?: SortOrder
    revoked?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type tokensSumOrderByAggregateInput = {
    id_token?: SortOrder
    user_id?: SortOrder
    revoked?: SortOrder
    active?: SortOrder
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

  export type TokensListRelationFilter = {
    every?: tokensWhereInput
    some?: tokensWhereInput
    none?: tokensWhereInput
  }

  export type LogsListRelationFilter = {
    every?: logsWhereInput
    some?: logsWhereInput
    none?: logsWhereInput
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: profilesWhereInput | null
    isNot?: profilesWhereInput | null
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type SpotsNullableScalarRelationFilter = {
    is?: spotsWhereInput | null
    isNot?: spotsWhereInput | null
  }

  export type tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id_user?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id_user?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type logsOrderByRelevanceInput = {
    fields: logsOrderByRelevanceFieldEnum | logsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logsCountOrderByAggregateInput = {
    id_log?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    id_log?: SortOrder
    user_id?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id_log?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id_log?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    id_log?: SortOrder
    user_id?: SortOrder
  }

  export type TokensNullableScalarRelationFilter = {
    is?: tokensWhereInput | null
    isNot?: tokensWhereInput | null
  }

  export type loginsOrderByRelevanceInput = {
    fields: loginsOrderByRelevanceFieldEnum | loginsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type loginsCountOrderByAggregateInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrder
    attempts?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type loginsAvgOrderByAggregateInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrder
    attempts?: SortOrder
  }

  export type loginsMaxOrderByAggregateInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrder
    attempts?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type loginsMinOrderByAggregateInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrder
    attempts?: SortOrder
    state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type loginsSumOrderByAggregateInput = {
    id_login?: SortOrder
    id_user?: SortOrder
    id_token?: SortOrder
    attempts?: SortOrder
  }

  export type spotsCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type spotsUncheckedCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type spotsUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    upsert?: spotsUpsertWithWhereUniqueWithoutEntitiesInput | spotsUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    set?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    disconnect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    delete?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    update?: spotsUpdateWithWhereUniqueWithoutEntitiesInput | spotsUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: spotsUpdateManyWithWhereWithoutEntitiesInput | spotsUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: spotsScalarWhereInput | spotsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutEntitiesInput | usersUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutEntitiesInput | usersUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutEntitiesInput | usersUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type spotsUncheckedUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    upsert?: spotsUpsertWithWhereUniqueWithoutEntitiesInput | spotsUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    set?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    disconnect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    delete?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    update?: spotsUpdateWithWhereUniqueWithoutEntitiesInput | spotsUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: spotsUpdateManyWithWhereWithoutEntitiesInput | spotsUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: spotsScalarWhereInput | spotsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutEntitiesInput | usersUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutEntitiesInput | usersUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutEntitiesInput | usersUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutProfilesInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProfilesInput | usersUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProfilesInput | usersUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProfilesInput | usersUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProfilesInput | usersUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProfilesInput | usersUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProfilesInput | usersUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type entitiesCreateNestedOneWithoutSpotsInput = {
    create?: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutSpotsInput
    connect?: entitiesWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutSpotsInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutSpotsInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type entitiesUpdateOneRequiredWithoutSpotsNestedInput = {
    create?: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutSpotsInput
    upsert?: entitiesUpsertWithoutSpotsInput
    connect?: entitiesWhereUniqueInput
    update?: XOR<XOR<entitiesUpdateToOneWithWhereWithoutSpotsInput, entitiesUpdateWithoutSpotsInput>, entitiesUncheckedUpdateWithoutSpotsInput>
  }

  export type usersUpdateManyWithoutSpotsNestedInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSpotsInput | usersUpsertWithWhereUniqueWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSpotsInput | usersUpdateWithWhereUniqueWithoutSpotsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSpotsInput | usersUpdateManyWithWhereWithoutSpotsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutSpotsNestedInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSpotsInput | usersUpsertWithWhereUniqueWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSpotsInput | usersUpdateWithWhereUniqueWithoutSpotsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSpotsInput | usersUpdateManyWithWhereWithoutSpotsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTokensInput = {
    create?: XOR<usersCreateWithoutTokensInput, usersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutTokensInput
    connect?: usersWhereUniqueInput
  }

  export type loginsCreateNestedManyWithoutTokensInput = {
    create?: XOR<loginsCreateWithoutTokensInput, loginsUncheckedCreateWithoutTokensInput> | loginsCreateWithoutTokensInput[] | loginsUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutTokensInput | loginsCreateOrConnectWithoutTokensInput[]
    createMany?: loginsCreateManyTokensInputEnvelope
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
  }

  export type loginsUncheckedCreateNestedManyWithoutTokensInput = {
    create?: XOR<loginsCreateWithoutTokensInput, loginsUncheckedCreateWithoutTokensInput> | loginsCreateWithoutTokensInput[] | loginsUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutTokensInput | loginsCreateOrConnectWithoutTokensInput[]
    createMany?: loginsCreateManyTokensInputEnvelope
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<usersCreateWithoutTokensInput, usersUncheckedCreateWithoutTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutTokensInput
    upsert?: usersUpsertWithoutTokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTokensInput, usersUpdateWithoutTokensInput>, usersUncheckedUpdateWithoutTokensInput>
  }

  export type loginsUpdateManyWithoutTokensNestedInput = {
    create?: XOR<loginsCreateWithoutTokensInput, loginsUncheckedCreateWithoutTokensInput> | loginsCreateWithoutTokensInput[] | loginsUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutTokensInput | loginsCreateOrConnectWithoutTokensInput[]
    upsert?: loginsUpsertWithWhereUniqueWithoutTokensInput | loginsUpsertWithWhereUniqueWithoutTokensInput[]
    createMany?: loginsCreateManyTokensInputEnvelope
    set?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    disconnect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    delete?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    update?: loginsUpdateWithWhereUniqueWithoutTokensInput | loginsUpdateWithWhereUniqueWithoutTokensInput[]
    updateMany?: loginsUpdateManyWithWhereWithoutTokensInput | loginsUpdateManyWithWhereWithoutTokensInput[]
    deleteMany?: loginsScalarWhereInput | loginsScalarWhereInput[]
  }

  export type loginsUncheckedUpdateManyWithoutTokensNestedInput = {
    create?: XOR<loginsCreateWithoutTokensInput, loginsUncheckedCreateWithoutTokensInput> | loginsCreateWithoutTokensInput[] | loginsUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutTokensInput | loginsCreateOrConnectWithoutTokensInput[]
    upsert?: loginsUpsertWithWhereUniqueWithoutTokensInput | loginsUpsertWithWhereUniqueWithoutTokensInput[]
    createMany?: loginsCreateManyTokensInputEnvelope
    set?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    disconnect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    delete?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    update?: loginsUpdateWithWhereUniqueWithoutTokensInput | loginsUpdateWithWhereUniqueWithoutTokensInput[]
    updateMany?: loginsUpdateManyWithWhereWithoutTokensInput | loginsUpdateManyWithWhereWithoutTokensInput[]
    deleteMany?: loginsScalarWhereInput | loginsScalarWhereInput[]
  }

  export type tokensCreateNestedManyWithoutUsersInput = {
    create?: XOR<tokensCreateWithoutUsersInput, tokensUncheckedCreateWithoutUsersInput> | tokensCreateWithoutUsersInput[] | tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUsersInput | tokensCreateOrConnectWithoutUsersInput[]
    createMany?: tokensCreateManyUsersInputEnvelope
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
  }

  export type logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type loginsCreateNestedManyWithoutUsersInput = {
    create?: XOR<loginsCreateWithoutUsersInput, loginsUncheckedCreateWithoutUsersInput> | loginsCreateWithoutUsersInput[] | loginsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutUsersInput | loginsCreateOrConnectWithoutUsersInput[]
    createMany?: loginsCreateManyUsersInputEnvelope
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
  }

  export type entitiesCreateNestedOneWithoutUsersInput = {
    create?: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutUsersInput
    connect?: entitiesWhereUniqueInput
  }

  export type profilesCreateNestedOneWithoutUsersInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    connect?: profilesWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type spotsCreateNestedOneWithoutUsersInput = {
    create?: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: spotsCreateOrConnectWithoutUsersInput
    connect?: spotsWhereUniqueInput
  }

  export type tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<tokensCreateWithoutUsersInput, tokensUncheckedCreateWithoutUsersInput> | tokensCreateWithoutUsersInput[] | tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUsersInput | tokensCreateOrConnectWithoutUsersInput[]
    createMany?: tokensCreateManyUsersInputEnvelope
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
  }

  export type logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type loginsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<loginsCreateWithoutUsersInput, loginsUncheckedCreateWithoutUsersInput> | loginsCreateWithoutUsersInput[] | loginsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutUsersInput | loginsCreateOrConnectWithoutUsersInput[]
    createMany?: loginsCreateManyUsersInputEnvelope
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
  }

  export type tokensUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tokensCreateWithoutUsersInput, tokensUncheckedCreateWithoutUsersInput> | tokensCreateWithoutUsersInput[] | tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUsersInput | tokensCreateOrConnectWithoutUsersInput[]
    upsert?: tokensUpsertWithWhereUniqueWithoutUsersInput | tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tokensCreateManyUsersInputEnvelope
    set?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    disconnect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    delete?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    update?: tokensUpdateWithWhereUniqueWithoutUsersInput | tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tokensUpdateManyWithWhereWithoutUsersInput | tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tokensScalarWhereInput | tokensScalarWhereInput[]
  }

  export type logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUsersInput | logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUsersInput | logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUsersInput | logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type loginsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<loginsCreateWithoutUsersInput, loginsUncheckedCreateWithoutUsersInput> | loginsCreateWithoutUsersInput[] | loginsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutUsersInput | loginsCreateOrConnectWithoutUsersInput[]
    upsert?: loginsUpsertWithWhereUniqueWithoutUsersInput | loginsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: loginsCreateManyUsersInputEnvelope
    set?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    disconnect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    delete?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    update?: loginsUpdateWithWhereUniqueWithoutUsersInput | loginsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: loginsUpdateManyWithWhereWithoutUsersInput | loginsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: loginsScalarWhereInput | loginsScalarWhereInput[]
  }

  export type entitiesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutUsersInput
    upsert?: entitiesUpsertWithoutUsersInput
    connect?: entitiesWhereUniqueInput
    update?: XOR<XOR<entitiesUpdateToOneWithWhereWithoutUsersInput, entitiesUpdateWithoutUsersInput>, entitiesUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    upsert?: profilesUpsertWithoutUsersInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutUsersInput, profilesUpdateWithoutUsersInput>, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type spotsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: spotsCreateOrConnectWithoutUsersInput
    upsert?: spotsUpsertWithoutUsersInput
    disconnect?: spotsWhereInput | boolean
    delete?: spotsWhereInput | boolean
    connect?: spotsWhereUniqueInput
    update?: XOR<XOR<spotsUpdateToOneWithWhereWithoutUsersInput, spotsUpdateWithoutUsersInput>, spotsUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tokensCreateWithoutUsersInput, tokensUncheckedCreateWithoutUsersInput> | tokensCreateWithoutUsersInput[] | tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUsersInput | tokensCreateOrConnectWithoutUsersInput[]
    upsert?: tokensUpsertWithWhereUniqueWithoutUsersInput | tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tokensCreateManyUsersInputEnvelope
    set?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    disconnect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    delete?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    update?: tokensUpdateWithWhereUniqueWithoutUsersInput | tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tokensUpdateManyWithWhereWithoutUsersInput | tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tokensScalarWhereInput | tokensScalarWhereInput[]
  }

  export type logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput> | logsCreateWithoutUsersInput[] | logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUsersInput | logsCreateOrConnectWithoutUsersInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUsersInput | logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: logsCreateManyUsersInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUsersInput | logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUsersInput | logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type loginsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<loginsCreateWithoutUsersInput, loginsUncheckedCreateWithoutUsersInput> | loginsCreateWithoutUsersInput[] | loginsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: loginsCreateOrConnectWithoutUsersInput | loginsCreateOrConnectWithoutUsersInput[]
    upsert?: loginsUpsertWithWhereUniqueWithoutUsersInput | loginsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: loginsCreateManyUsersInputEnvelope
    set?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    disconnect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    delete?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    connect?: loginsWhereUniqueInput | loginsWhereUniqueInput[]
    update?: loginsUpdateWithWhereUniqueWithoutUsersInput | loginsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: loginsUpdateManyWithWhereWithoutUsersInput | loginsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: loginsScalarWhereInput | loginsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutLogsInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutLogsNestedInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    upsert?: usersUpsertWithoutLogsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLogsInput, usersUpdateWithoutLogsInput>, usersUncheckedUpdateWithoutLogsInput>
  }

  export type usersCreateNestedOneWithoutLoginsInput = {
    create?: XOR<usersCreateWithoutLoginsInput, usersUncheckedCreateWithoutLoginsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLoginsInput
    connect?: usersWhereUniqueInput
  }

  export type tokensCreateNestedOneWithoutLoginsInput = {
    create?: XOR<tokensCreateWithoutLoginsInput, tokensUncheckedCreateWithoutLoginsInput>
    connectOrCreate?: tokensCreateOrConnectWithoutLoginsInput
    connect?: tokensWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLoginsNestedInput = {
    create?: XOR<usersCreateWithoutLoginsInput, usersUncheckedCreateWithoutLoginsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLoginsInput
    upsert?: usersUpsertWithoutLoginsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLoginsInput, usersUpdateWithoutLoginsInput>, usersUncheckedUpdateWithoutLoginsInput>
  }

  export type tokensUpdateOneWithoutLoginsNestedInput = {
    create?: XOR<tokensCreateWithoutLoginsInput, tokensUncheckedCreateWithoutLoginsInput>
    connectOrCreate?: tokensCreateOrConnectWithoutLoginsInput
    upsert?: tokensUpsertWithoutLoginsInput
    disconnect?: tokensWhereInput | boolean
    delete?: tokensWhereInput | boolean
    connect?: tokensWhereUniqueInput
    update?: XOR<XOR<tokensUpdateToOneWithWhereWithoutLoginsInput, tokensUpdateWithoutLoginsInput>, tokensUncheckedUpdateWithoutLoginsInput>
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

  export type spotsCreateWithoutEntitiesInput = {
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutSpotsInput
  }

  export type spotsUncheckedCreateWithoutEntitiesInput = {
    id_spot?: number
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutSpotsInput
  }

  export type spotsCreateOrConnectWithoutEntitiesInput = {
    where: spotsWhereUniqueInput
    create: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput>
  }

  export type spotsCreateManyEntitiesInputEnvelope = {
    data: spotsCreateManyEntitiesInput | spotsCreateManyEntitiesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutEntitiesInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEntitiesInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEntitiesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput>
  }

  export type usersCreateManyEntitiesInputEnvelope = {
    data: usersCreateManyEntitiesInput | usersCreateManyEntitiesInput[]
    skipDuplicates?: boolean
  }

  export type spotsUpsertWithWhereUniqueWithoutEntitiesInput = {
    where: spotsWhereUniqueInput
    update: XOR<spotsUpdateWithoutEntitiesInput, spotsUncheckedUpdateWithoutEntitiesInput>
    create: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput>
  }

  export type spotsUpdateWithWhereUniqueWithoutEntitiesInput = {
    where: spotsWhereUniqueInput
    data: XOR<spotsUpdateWithoutEntitiesInput, spotsUncheckedUpdateWithoutEntitiesInput>
  }

  export type spotsUpdateManyWithWhereWithoutEntitiesInput = {
    where: spotsScalarWhereInput
    data: XOR<spotsUpdateManyMutationInput, spotsUncheckedUpdateManyWithoutEntitiesInput>
  }

  export type spotsScalarWhereInput = {
    AND?: spotsScalarWhereInput | spotsScalarWhereInput[]
    OR?: spotsScalarWhereInput[]
    NOT?: spotsScalarWhereInput | spotsScalarWhereInput[]
    id_spot?: IntFilter<"spots"> | number
    entity_id?: IntFilter<"spots"> | number
    name?: StringFilter<"spots"> | string
    description?: StringNullableFilter<"spots"> | string | null
    active?: IntFilter<"spots"> | number
    created_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"spots"> | Date | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutEntitiesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutEntitiesInput, usersUncheckedUpdateWithoutEntitiesInput>
    create: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutEntitiesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutEntitiesInput, usersUncheckedUpdateWithoutEntitiesInput>
  }

  export type usersUpdateManyWithWhereWithoutEntitiesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutEntitiesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id_user?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    entity_id?: IntFilter<"users"> | number
    spot_id?: IntNullableFilter<"users"> | number | null
    profile_id?: IntNullableFilter<"users"> | number | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersCreateWithoutProfilesInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfilesInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProfilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type usersCreateManyProfilesInputEnvelope = {
    data: usersCreateManyProfilesInput | usersCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutProfilesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutProfilesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
  }

  export type usersUpdateManyWithWhereWithoutProfilesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutProfilesInput>
  }

  export type usersCreateWithoutRolesInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id_user?: number
    email: string
    password: string
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type entitiesCreateWithoutSpotsInput = {
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUncheckedCreateWithoutSpotsInput = {
    id_entity?: number
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesCreateOrConnectWithoutSpotsInput = {
    where: entitiesWhereUniqueInput
    create: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
  }

  export type usersCreateWithoutSpotsInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSpotsInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSpotsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput>
  }

  export type usersCreateManySpotsInputEnvelope = {
    data: usersCreateManySpotsInput | usersCreateManySpotsInput[]
    skipDuplicates?: boolean
  }

  export type entitiesUpsertWithoutSpotsInput = {
    update: XOR<entitiesUpdateWithoutSpotsInput, entitiesUncheckedUpdateWithoutSpotsInput>
    create: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
    where?: entitiesWhereInput
  }

  export type entitiesUpdateToOneWithWhereWithoutSpotsInput = {
    where?: entitiesWhereInput
    data: XOR<entitiesUpdateWithoutSpotsInput, entitiesUncheckedUpdateWithoutSpotsInput>
  }

  export type entitiesUpdateWithoutSpotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesUncheckedUpdateWithoutSpotsInput = {
    id_entity?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutEntitiesNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutSpotsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutSpotsInput, usersUncheckedUpdateWithoutSpotsInput>
    create: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutSpotsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutSpotsInput, usersUncheckedUpdateWithoutSpotsInput>
  }

  export type usersUpdateManyWithWhereWithoutSpotsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutSpotsInput>
  }

  export type usersCreateWithoutTokensInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    logs?: logsCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTokensInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTokensInput, usersUncheckedCreateWithoutTokensInput>
  }

  export type loginsCreateWithoutTokensInput = {
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutLoginsInput
  }

  export type loginsUncheckedCreateWithoutTokensInput = {
    id_login?: number
    id_user: number
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type loginsCreateOrConnectWithoutTokensInput = {
    where: loginsWhereUniqueInput
    create: XOR<loginsCreateWithoutTokensInput, loginsUncheckedCreateWithoutTokensInput>
  }

  export type loginsCreateManyTokensInputEnvelope = {
    data: loginsCreateManyTokensInput | loginsCreateManyTokensInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTokensInput = {
    update: XOR<usersUpdateWithoutTokensInput, usersUncheckedUpdateWithoutTokensInput>
    create: XOR<usersCreateWithoutTokensInput, usersUncheckedCreateWithoutTokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTokensInput, usersUncheckedUpdateWithoutTokensInput>
  }

  export type usersUpdateWithoutTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: logsUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTokensInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type loginsUpsertWithWhereUniqueWithoutTokensInput = {
    where: loginsWhereUniqueInput
    update: XOR<loginsUpdateWithoutTokensInput, loginsUncheckedUpdateWithoutTokensInput>
    create: XOR<loginsCreateWithoutTokensInput, loginsUncheckedCreateWithoutTokensInput>
  }

  export type loginsUpdateWithWhereUniqueWithoutTokensInput = {
    where: loginsWhereUniqueInput
    data: XOR<loginsUpdateWithoutTokensInput, loginsUncheckedUpdateWithoutTokensInput>
  }

  export type loginsUpdateManyWithWhereWithoutTokensInput = {
    where: loginsScalarWhereInput
    data: XOR<loginsUpdateManyMutationInput, loginsUncheckedUpdateManyWithoutTokensInput>
  }

  export type loginsScalarWhereInput = {
    AND?: loginsScalarWhereInput | loginsScalarWhereInput[]
    OR?: loginsScalarWhereInput[]
    NOT?: loginsScalarWhereInput | loginsScalarWhereInput[]
    id_login?: IntFilter<"logins"> | number
    id_user?: IntFilter<"logins"> | number
    id_token?: IntNullableFilter<"logins"> | number | null
    attempts?: IntFilter<"logins"> | number
    state?: StringFilter<"logins"> | string
    created_at?: DateTimeNullableFilter<"logins"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"logins"> | Date | string | null
  }

  export type tokensCreateWithoutUsersInput = {
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
    logins?: loginsCreateNestedManyWithoutTokensInput
  }

  export type tokensUncheckedCreateWithoutUsersInput = {
    id_token?: number
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
    logins?: loginsUncheckedCreateNestedManyWithoutTokensInput
  }

  export type tokensCreateOrConnectWithoutUsersInput = {
    where: tokensWhereUniqueInput
    create: XOR<tokensCreateWithoutUsersInput, tokensUncheckedCreateWithoutUsersInput>
  }

  export type tokensCreateManyUsersInputEnvelope = {
    data: tokensCreateManyUsersInput | tokensCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type logsCreateWithoutUsersInput = {
    action: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type logsUncheckedCreateWithoutUsersInput = {
    id_log?: number
    action: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type logsCreateOrConnectWithoutUsersInput = {
    where: logsWhereUniqueInput
    create: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput>
  }

  export type logsCreateManyUsersInputEnvelope = {
    data: logsCreateManyUsersInput | logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type loginsCreateWithoutUsersInput = {
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedOneWithoutLoginsInput
  }

  export type loginsUncheckedCreateWithoutUsersInput = {
    id_login?: number
    id_token?: number | null
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type loginsCreateOrConnectWithoutUsersInput = {
    where: loginsWhereUniqueInput
    create: XOR<loginsCreateWithoutUsersInput, loginsUncheckedCreateWithoutUsersInput>
  }

  export type loginsCreateManyUsersInputEnvelope = {
    data: loginsCreateManyUsersInput | loginsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type entitiesCreateWithoutUsersInput = {
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUncheckedCreateWithoutUsersInput = {
    id_entity?: number
    name: string
    type: string
    description?: string | null
    number?: string | null
    size?: string | null
    logo_url?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsUncheckedCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesCreateOrConnectWithoutUsersInput = {
    where: entitiesWhereUniqueInput
    create: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
  }

  export type profilesCreateWithoutUsersInput = {
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profilesUncheckedCreateWithoutUsersInput = {
    id_profile?: number
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profilesCreateOrConnectWithoutUsersInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
  }

  export type rolesCreateWithoutUsersInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id_role?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type spotsCreateWithoutUsersInput = {
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entities: entitiesCreateNestedOneWithoutSpotsInput
  }

  export type spotsUncheckedCreateWithoutUsersInput = {
    id_spot?: number
    entity_id: number
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type spotsCreateOrConnectWithoutUsersInput = {
    where: spotsWhereUniqueInput
    create: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
  }

  export type tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: tokensWhereUniqueInput
    update: XOR<tokensUpdateWithoutUsersInput, tokensUncheckedUpdateWithoutUsersInput>
    create: XOR<tokensCreateWithoutUsersInput, tokensUncheckedCreateWithoutUsersInput>
  }

  export type tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: tokensWhereUniqueInput
    data: XOR<tokensUpdateWithoutUsersInput, tokensUncheckedUpdateWithoutUsersInput>
  }

  export type tokensUpdateManyWithWhereWithoutUsersInput = {
    where: tokensScalarWhereInput
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyWithoutUsersInput>
  }

  export type tokensScalarWhereInput = {
    AND?: tokensScalarWhereInput | tokensScalarWhereInput[]
    OR?: tokensScalarWhereInput[]
    NOT?: tokensScalarWhereInput | tokensScalarWhereInput[]
    id_token?: IntFilter<"tokens"> | number
    user_id?: IntFilter<"tokens"> | number
    r_token?: StringFilter<"tokens"> | string
    access_token?: StringNullableFilter<"tokens"> | string | null
    exec_token?: StringNullableFilter<"tokens"> | string | null
    revoked?: IntFilter<"tokens"> | number
    expires_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    status?: StringNullableFilter<"tokens"> | string | null
    active?: IntFilter<"tokens"> | number
    created_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
  }

  export type logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: logsWhereUniqueInput
    update: XOR<logsUpdateWithoutUsersInput, logsUncheckedUpdateWithoutUsersInput>
    create: XOR<logsCreateWithoutUsersInput, logsUncheckedCreateWithoutUsersInput>
  }

  export type logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: logsWhereUniqueInput
    data: XOR<logsUpdateWithoutUsersInput, logsUncheckedUpdateWithoutUsersInput>
  }

  export type logsUpdateManyWithWhereWithoutUsersInput = {
    where: logsScalarWhereInput
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type logsScalarWhereInput = {
    AND?: logsScalarWhereInput | logsScalarWhereInput[]
    OR?: logsScalarWhereInput[]
    NOT?: logsScalarWhereInput | logsScalarWhereInput[]
    id_log?: IntFilter<"logs"> | number
    user_id?: IntNullableFilter<"logs"> | number | null
    action?: StringFilter<"logs"> | string
    description?: StringNullableFilter<"logs"> | string | null
    created_at?: DateTimeNullableFilter<"logs"> | Date | string | null
  }

  export type loginsUpsertWithWhereUniqueWithoutUsersInput = {
    where: loginsWhereUniqueInput
    update: XOR<loginsUpdateWithoutUsersInput, loginsUncheckedUpdateWithoutUsersInput>
    create: XOR<loginsCreateWithoutUsersInput, loginsUncheckedCreateWithoutUsersInput>
  }

  export type loginsUpdateWithWhereUniqueWithoutUsersInput = {
    where: loginsWhereUniqueInput
    data: XOR<loginsUpdateWithoutUsersInput, loginsUncheckedUpdateWithoutUsersInput>
  }

  export type loginsUpdateManyWithWhereWithoutUsersInput = {
    where: loginsScalarWhereInput
    data: XOR<loginsUpdateManyMutationInput, loginsUncheckedUpdateManyWithoutUsersInput>
  }

  export type entitiesUpsertWithoutUsersInput = {
    update: XOR<entitiesUpdateWithoutUsersInput, entitiesUncheckedUpdateWithoutUsersInput>
    create: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
    where?: entitiesWhereInput
  }

  export type entitiesUpdateToOneWithWhereWithoutUsersInput = {
    where?: entitiesWhereInput
    data: XOR<entitiesUpdateWithoutUsersInput, entitiesUncheckedUpdateWithoutUsersInput>
  }

  export type entitiesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesUncheckedUpdateWithoutUsersInput = {
    id_entity?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUncheckedUpdateManyWithoutEntitiesNestedInput
  }

  export type profilesUpsertWithoutUsersInput = {
    update: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUpdateWithoutUsersInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateWithoutUsersInput = {
    id_profile?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsUpsertWithoutUsersInput = {
    update: XOR<spotsUpdateWithoutUsersInput, spotsUncheckedUpdateWithoutUsersInput>
    create: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
    where?: spotsWhereInput
  }

  export type spotsUpdateToOneWithWhereWithoutUsersInput = {
    where?: spotsWhereInput
    data: XOR<spotsUpdateWithoutUsersInput, spotsUncheckedUpdateWithoutUsersInput>
  }

  export type spotsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entities?: entitiesUpdateOneRequiredWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateWithoutUsersInput = {
    id_spot?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutLogsInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logins?: loginsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLogsInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logins?: loginsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLogsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
  }

  export type usersUpsertWithoutLogsInput = {
    update: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLogsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
  }

  export type usersUpdateWithoutLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLogsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutLoginsInput = {
    email: string
    password: string
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensCreateNestedManyWithoutUsersInput
    logs?: logsCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLoginsInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tokens?: tokensUncheckedCreateNestedManyWithoutUsersInput
    logs?: logsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLoginsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLoginsInput, usersUncheckedCreateWithoutLoginsInput>
  }

  export type tokensCreateWithoutLoginsInput = {
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutTokensInput
  }

  export type tokensUncheckedCreateWithoutLoginsInput = {
    id_token?: number
    user_id: number
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
  }

  export type tokensCreateOrConnectWithoutLoginsInput = {
    where: tokensWhereUniqueInput
    create: XOR<tokensCreateWithoutLoginsInput, tokensUncheckedCreateWithoutLoginsInput>
  }

  export type usersUpsertWithoutLoginsInput = {
    update: XOR<usersUpdateWithoutLoginsInput, usersUncheckedUpdateWithoutLoginsInput>
    create: XOR<usersCreateWithoutLoginsInput, usersUncheckedCreateWithoutLoginsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLoginsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLoginsInput, usersUncheckedUpdateWithoutLoginsInput>
  }

  export type usersUpdateWithoutLoginsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLoginsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tokensUpsertWithoutLoginsInput = {
    update: XOR<tokensUpdateWithoutLoginsInput, tokensUncheckedUpdateWithoutLoginsInput>
    create: XOR<tokensCreateWithoutLoginsInput, tokensUncheckedCreateWithoutLoginsInput>
    where?: tokensWhereInput
  }

  export type tokensUpdateToOneWithWhereWithoutLoginsInput = {
    where?: tokensWhereInput
    data: XOR<tokensUpdateWithoutLoginsInput, tokensUncheckedUpdateWithoutLoginsInput>
  }

  export type tokensUpdateWithoutLoginsInput = {
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTokensNestedInput
  }

  export type tokensUncheckedUpdateWithoutLoginsInput = {
    id_token?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsCreateManyEntitiesInput = {
    id_spot?: number
    name: string
    description?: string | null
    active?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersCreateManyEntitiesInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type spotsUpdateWithoutEntitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateWithoutEntitiesInput = {
    id_spot?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateManyWithoutEntitiesInput = {
    id_spot?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutEntitiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEntitiesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutEntitiesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyProfilesInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutProfilesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProfilesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutProfilesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyRolesInput = {
    id_user?: number
    email: string
    password: string
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManySpotsInput = {
    id_user?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    profile_id?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutSpotsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateManyWithoutUsersNestedInput
    logs?: logsUpdateManyWithoutUsersNestedInput
    logins?: loginsUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSpotsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUncheckedUpdateManyWithoutUsersNestedInput
    logs?: logsUncheckedUpdateManyWithoutUsersNestedInput
    logins?: loginsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutSpotsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsCreateManyTokensInput = {
    id_login?: number
    id_user: number
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type loginsUpdateWithoutTokensInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutLoginsNestedInput
  }

  export type loginsUncheckedUpdateWithoutTokensInput = {
    id_login?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsUncheckedUpdateManyWithoutTokensInput = {
    id_login?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokensCreateManyUsersInput = {
    id_token?: number
    r_token: string
    access_token?: string | null
    exec_token?: string | null
    revoked?: number
    expires_at?: Date | string | null
    status?: string | null
    active?: number
    created_at?: Date | string | null
  }

  export type logsCreateManyUsersInput = {
    id_log?: number
    action: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type loginsCreateManyUsersInput = {
    id_login?: number
    id_token?: number | null
    attempts?: number
    state: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tokensUpdateWithoutUsersInput = {
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logins?: loginsUpdateManyWithoutTokensNestedInput
  }

  export type tokensUncheckedUpdateWithoutUsersInput = {
    id_token?: IntFieldUpdateOperationsInput | number
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logins?: loginsUncheckedUpdateManyWithoutTokensNestedInput
  }

  export type tokensUncheckedUpdateManyWithoutUsersInput = {
    id_token?: IntFieldUpdateOperationsInput | number
    r_token?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    exec_token?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: IntFieldUpdateOperationsInput | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUpdateWithoutUsersInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateWithoutUsersInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logsUncheckedUpdateManyWithoutUsersInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsUpdateWithoutUsersInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokens?: tokensUpdateOneWithoutLoginsNestedInput
  }

  export type loginsUncheckedUpdateWithoutUsersInput = {
    id_login?: IntFieldUpdateOperationsInput | number
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginsUncheckedUpdateManyWithoutUsersInput = {
    id_login?: IntFieldUpdateOperationsInput | number
    id_token?: NullableIntFieldUpdateOperationsInput | number | null
    attempts?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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