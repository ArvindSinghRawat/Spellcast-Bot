# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: trie.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\ntrie.proto\"\x8e\x01\n\x04Trie\x12\x18\n\x07\x64\x65tails\x18\x01 \x03(\x0b\x32\x07.Detail\x12%\n\x08\x63hildren\x18\x02 \x03(\x0b\x32\x13.Trie.ChildrenEntry\x12\r\n\x05level\x18\x03 \x01(\x05\x1a\x36\n\rChildrenEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x14\n\x05value\x18\x02 \x01(\x0b\x32\x05.Trie:\x02\x38\x01\"o\n\x06\x44\x65tail\x12\x14\n\x07meaning\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x1c\n\x04type\x18\x02 \x01(\x0e\x32\t.WordTypeH\x01\x88\x01\x01\x12\x12\n\x05index\x18\x03 \x01(\x05H\x02\x88\x01\x01\x42\n\n\x08_meaningB\x07\n\x05_typeB\x08\n\x06_index*\x98\x01\n\x08WordType\x12\x08\n\x04NOUN\x10\x00\x12\r\n\tADJECTIVE\x10\x01\x12\x08\n\x04VERB\x10\x02\x12\n\n\x06\x41\x44VERB\x10\x03\x12\x0b\n\x07PRONOUN\x10\x04\x12\x0f\n\x0b\x43ONJUNCTION\x10\x05\x12\x0f\n\x0bPREPOSITION\x10\x06\x12\x10\n\x0cINTERJECTION\x10\x07\x12\n\n\x06NUMBER\x10\x08\x12\x10\n\x0c\x41\x42\x42REVIATION\x10\tb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'trie_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _TRIE_CHILDRENENTRY._options = None
  _TRIE_CHILDRENENTRY._serialized_options = b'8\001'
  _WORDTYPE._serialized_start=273
  _WORDTYPE._serialized_end=425
  _TRIE._serialized_start=15
  _TRIE._serialized_end=157
  _TRIE_CHILDRENENTRY._serialized_start=103
  _TRIE_CHILDRENENTRY._serialized_end=157
  _DETAIL._serialized_start=159
  _DETAIL._serialized_end=270
# @@protoc_insertion_point(module_scope)
