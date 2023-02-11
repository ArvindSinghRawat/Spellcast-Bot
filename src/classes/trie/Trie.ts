/**
 * Individual items of Trie with values and its child
 */
export default class Trie {
    readonly value: string
    readonly meaning?: string
    readonly children: Map<string, Trie> = new Map()
    readonly parent?: Trie
    readonly level: number = 1
    /**
     *
     * @param value Current value of the node
     * @param meaning
     * @param children
     * @param parent
     */
    constructor(
        value: string,
        meaning?: string,
        children?: Map<string, Trie>,
        parent?: Trie
    ) {
        if (!value || value.length !== 1) {
            throw new RangeError(
                value +
                    ' is not a valid value for the node, only 1 character is expected'
            )
        }
        this.value = value
        this.meaning = meaning
        if (parent) {
            this.parent = parent
            this.level = this.parent.level + 1
            parent.addChild(this)
        }
        if (children) this.children = children
    }

    /**
     * Adds a new child, if valid
     * @param child Non null and undefined object
     */
    addChild(child: Trie): void {
        if (child) {
            this.children.set(child.value, child)
        }
    }

    /**
     * Searches for the node in the children
     * @param key - character for the trie for which child node is requested
     * @returns Child node if exists otherwise null
     */
    getChild(key: string): Trie | null {
        const value = this.children.get(key)
        return value ? value : null
    }

    /**
     * Returns string representation of the tree
     * @returns Response will look like `CURRENT [ { CHILD_1 } { CHILD_2 } ... ]`
     */
    public toString = (): string => {
        return this.detailedToString(false)
    }

    /**
     * Returns string representation of the tree
     * @param printDetails if true, then also prints level with value
     * @returns Response will look like exactly as `toString` if printDetails is `false`<br/> otherwise as the following `CURRENT(LEVEL) [ { CHILD_1(CHILD_1_LEVEL) } { CHILD_2(CHILD_2_LEVEL) } ... ]`
     */
    public detailedToString = (printDetails: boolean): string => {
        let result = `${this.value}${printDetails ? `(${printDetails})` : ''} `

        if (this.children && this.children.size > 0) {
            result += '[ '
            this.children.forEach((value, _) => {
                result += '{ '
                result += value.detailedToString(printDetails) + ' '
                result += '} '
            })
            result += ']'
        }

        return result
    }
}
