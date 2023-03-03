from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

ABBREVIATION: WordType
ADJECTIVE: WordType
ADVERB: WordType
CONJUNCTION: WordType
DESCRIPTOR: _descriptor.FileDescriptor
INTERJECTION: WordType
NOUN: WordType
NUMBER: WordType
PREPOSITION: WordType
PRONOUN: WordType
VERB: WordType

class Detail(_message.Message):
    __slots__ = ["index", "meaning", "type"]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    MEANING_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    index: int
    meaning: str
    type: WordType
    def __init__(self, meaning: _Optional[str] = ..., type: _Optional[_Union[WordType, str]] = ..., index: _Optional[int] = ...) -> None: ...

class Trie(_message.Message):
    __slots__ = ["children", "detail", "level"]
    class ChildrenEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Trie
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Trie, _Mapping]] = ...) -> None: ...
    CHILDREN_FIELD_NUMBER: _ClassVar[int]
    DETAIL_FIELD_NUMBER: _ClassVar[int]
    LEVEL_FIELD_NUMBER: _ClassVar[int]
    children: _containers.MessageMap[str, Trie]
    detail: Detail
    level: int
    def __init__(self, detail: _Optional[_Union[Detail, _Mapping]] = ..., children: _Optional[_Mapping[str, Trie]] = ..., level: _Optional[int] = ...) -> None: ...

class WordType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
