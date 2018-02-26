## Annex B: Bitstream Format
{:.no_count}


### Overview
{:.no_count}

An AV1 bitstream consists of a number of OBUs that are normally held within
a container format alongside audio and timing information.

This annex defines a simple method of packing OBUs into a bitstream format.

### Bitstream Syntax
{:.no_count}

~~~~~
bitstream( sz ) {
    while ( sz > 0 ) {
        ObuSize = 0
        for (i = 0; i < 8; i++) {
            uleb128_byte                                                       f(8)
            ObuSize |= ( (uleb128_byte & 0x7f) << (i*7) )
            sz -= 1
            if ( !(uleb128_byte & 0x80) ) {
                break
            }
        }
        open_bitstream_unit( ObuSize )
        sz -= ObuSize
    }
}
~~~~~
{:.syntax }


### Bitstream semantics
{:.no_count}

**sz** specifies the number of bytes in the entire bitstream and is provided by
external means.

**uleb128_byte** is used to compute ObuSize by sending 7 bits at a time, with the most significant bit used to indicate that there are more bytes to be read.

It is a requirement of bitstream conformance that the most significant bit of uleb128_byte is equal to 0 when i is equal to 7.
(This ensures that the ObuSize never uses more than 8 bytes.)

**Note:** There are multiple ways of encoding the same size depending on how many leading zero bits are encoded.
There is no requirement that the ObuSize is sent using the most compressed representation.
This can be useful for encoder implementations that want to leave a fixed amount of space to be filled in later for this size.
{:.alert .alert-info }

**ObuSize** specifies the size in bytes of the next OBU.
