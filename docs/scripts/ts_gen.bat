protoc docs\schemas\trie.proto -I=docs\schemas --ts_out="src/classes/proto/trie" --dependency_out="src/classes/proto/trie/dependency.txt" --enable_codegen_trace=true
python -m grpc_tools.protoc -I=docs\schemas --python_out="docs/schemas" --pyi_out="docs/schemas" docs/schemas/trie.proto
