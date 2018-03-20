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
        @@obu_length                                                           leb128()
        sz -= Leb128Bytes
        open_bitstream_unit( obu_length )
        sz -= obu_length
    }
}
~~~~~
{:.syntax }


### Bitstream semantics
{:.no_count}

**sz** specifies the number of bytes in the entire bitstream and is provided by
external means.

**obu_length** specifies the length in bytes of the next OBU.

**Note:** It is legal for the OBU to set obu_has_size_field equal to 1 to indicate
that the obu_size syntax element is present.  In this case, the decoding process
assumes that obu_size and obu_length are set consistently.
If obu_size and obu_length are both present, but inconsistent, then the packed file
is deemed invalid.
{:.alert .alert-info }
