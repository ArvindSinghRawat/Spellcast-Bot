// package:
// file: trie.proto

import * as jspb from 'google-protobuf'

export class Trie extends jspb.Message {
    getValue(): string
    setValue(value: string): void

    hasDetail(): boolean
    clearDetail(): void
    getDetail(): Detail | undefined
    setDetail(value?: Detail): void

    getChildrenMap(): jspb.Map<string, Trie>
    clearChildrenMap(): void
    getLevel(): number
    setLevel(value: number): void

    serializeBinary(): Uint8Array
    toObject(includeInstance?: boolean): Trie.AsObject
    static toObject(includeInstance: boolean, msg: Trie): Trie.AsObject
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
    }
    static serializeBinaryToWriter(
        message: Trie,
        writer: jspb.BinaryWriter
    ): void
    static deserializeBinary(bytes: Uint8Array): Trie
    static deserializeBinaryFromReader(
        message: Trie,
        reader: jspb.BinaryReader
    ): Trie
}

export namespace Trie {
    export type AsObject = {
        value: string
        detail?: Detail.AsObject
        childrenMap: Array<[string, Trie.AsObject]>
        level: number
    }
}

export class Detail extends jspb.Message {
    getMeaning(): string
    setMeaning(value: string): void

    hasType(): boolean
    clearType(): void
    getType(): WordTypeMap[keyof WordTypeMap]
    setType(value: WordTypeMap[keyof WordTypeMap]): void

    hasIndex(): boolean
    clearIndex(): void
    getIndex(): number
    setIndex(value: number): void

    serializeBinary(): Uint8Array
    toObject(includeInstance?: boolean): Detail.AsObject
    static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
    }
    static serializeBinaryToWriter(
        message: Detail,
        writer: jspb.BinaryWriter
    ): void
    static deserializeBinary(bytes: Uint8Array): Detail
    static deserializeBinaryFromReader(
        message: Detail,
        reader: jspb.BinaryReader
    ): Detail
}

export namespace Detail {
    export type AsObject = {
        meaning: string
        type: WordTypeMap[keyof WordTypeMap]
        index: number
    }
}

export interface WordTypeMap {
    NOUN: 0
    ADJECTIVE: 1
    VERB: 2
    ADVERB: 3
    PRONOUN: 4
    CONJUNCTION: 5
    PREPOSITION: 6
    INTERJECTION: 7
    NUMBER: 8
    ABBREVIATION: 9
}

export const WordType: WordTypeMap
