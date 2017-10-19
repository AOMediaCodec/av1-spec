## Annex B: Raw Bitstream Format
{:.no_count}


### Overview
{:.no_count}

An AV1 bitstream consists of a number of OBUs that are normally held within
a container format alongside audio and timing information.

This annex defines a simple method of packing OBUs into a raw bitstream format.

### Raw Bitstream Syntax
{:.no_count}

~~~~~
raw_bitstream( sz ) {
    while ( sz > 0 ) {
        @@obu_size                                                             le(4)
        open_bitstream_unit( obu_size )
        sz -= 4 + obu_size
    }
}
~~~~~
{:.syntax }


### Raw Bitstream semantics
{:.no_count}

**sz** specifies the number of bytes in the entire bitstream and is provided by
external means.

**obu_size** specifies the size in bytes of the next OBU.
