type DeepPartialArray<TValue> = DeepPartial<TValue>[];

type DeepPartialObject<TValue> = {
  [Key in keyof TValue]?: DeepPartial<TValue[Key]>;
};

export type DeepPartial<TValue> = TValue extends () => unknown
  ? TValue
  : TValue extends (infer InferredArrayMember)[]
    ? DeepPartialArray<InferredArrayMember>
    : TValue extends object
      ? DeepPartialObject<TValue>
      : TValue | undefined;

export type Serialized<T> = {
  [Key in keyof T]: T[Key] extends Date
    ? string
    : T[Key] extends Date | null
      ? string | null
      : T[Key] extends Date | undefined
        ? string | undefined
        : T[Key] extends Date | null | undefined
          ? string | null | undefined
          : T[Key];
};
