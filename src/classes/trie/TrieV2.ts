import { Detail, Trie } from '../proto/trie/trie_pb'
import * as jspb from 'google-protobuf'

export class TrieV2 {
    private readonly trie: Trie
    parent?: TrieV2

    protected constructor(trie: Trie, parent?: TrieV2) {
        this.trie = trie
        if (parent && parent.trie) {
            this.parent = parent
            this.trie.setLevel(parent.trie.getLevel() + 1)
            parent.trie.getChildrenMap().set(trie.getValue(), trie)
        }
    }

    /**
     *
     * @param value Current value of the node
     * @param meaning
     * @param children
     * @param parent
     */
    public static createInstance(
        value: string,
        detail?: Detail,
        children?: Map<string, TrieV2>,
        parent?: TrieV2
    ): TrieV2 {
        if (!value || value.length !== 1) {
            throw new RangeError(
                value +
                    ' is not a valid value for the node, only 1 character is expected'
            )
        }
        const trie = new Trie()
        trie.setValue(value)
        trie.setDetail(detail)
        if (parent && parent.trie) {
            trie.setLevel(parent.trie.getLevel() + 1)
            parent.trie.getChildrenMap().set(value, trie)
        }
        if (children) {
            children.forEach((child) => {
                trie.getChildrenMap().set(child.trie.getValue(), child.trie)
            })
        }
        return new TrieV2(trie, parent)
    }

    getValue(): string {
        return this.trie.getValue()
    }

    hasDetail(): boolean {
        return this.trie.hasDetail()
    }

    getDetail(): Detail | undefined {
        return this.trie.getDetail()
    }

    protected getChildrenMap(): jspb.Map<string, Trie> {
        return this.trie.getChildrenMap()
    }

    clearChildrenMap(): void {
        return this.trie.clearChildrenMap()
    }

    getLevel(): number {
        return this.trie.getLevel()
    }

    /**
     * Adds a new child, if valid
     * @param child Non null and undefined object
     */
    addChild(child: Trie | TrieV2): void {
        if (child) {
            if (child instanceof Trie) {
                new TrieV2(child, this)
            } else if (child instanceof TrieV2) {
                this.getChildrenMap().set(child.getValue(), child.trie)
                child.trie.setLevel(this.getLevel() + 1)
                child.parent = this
            }
        }
    }

    /**
     * Searches for the node in the children
     * @param key - character for the trie for which child node is requested
     * @returns Child node if exists otherwise null
     */
    getChild(key: string): Trie | null {
        const value = this.getChildrenMap().get(key)
        return value ? value : null
    }

    public serializeBinaryToWriter(writer: jspb.BinaryWriter): void {
        Trie.serializeBinaryToWriter(this.trie, writer)
    }

    static deserializeBinary(bytes: Uint8Array): TrieV2 {
        const current = Trie.deserializeBinary(bytes)
        // Builds complete tree
        return TrieV2.fillParentForChildren(current)
    }

    static deserializeBinaryFromReader(
        message: Trie,
        reader: jspb.BinaryReader
    ): TrieV2 {
        const current = Trie.deserializeBinaryFromReader(message, reader)
        return TrieV2.fillParentForChildren(current)
    }

    protected static fillParentForChildren(current: Trie): TrieV2 {
        return new TrieV2(current)
    }
}
