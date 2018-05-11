## Annex B: Bitstream format
{:.no_count}


### Overview
{:.no_count}

An AV1 bitstream consists of a number of OBUs that are normally held within
a container format alongside audio and timing information.

This annex defines a simple method of packing OBUs into a bitstream format.

### Bitstream syntax
{:.no_count}

| --------------------------------------------------------- | ---------------- |
| bitstream( fileSz ) {                                     | **Type**
|    while ( fileSz > 0 ) {
|        @@temporal_unit_size                               | leb128()
|        fileSz -= Leb128Bytes
|        temporal_unit( temporal_unit_size )
|        fileSz -= temporal_unit_size
|    }
|}
{:.syntax }

| --------------------------------------------------------- | ---------------- |
| temporal_unit( sz ) {                                     | **Type**
|    while ( sz > 0 ) {
|        @@frame_unit_size                                  | leb128()
|        sz -= Leb128Bytes
|        frame_unit( frame_unit_size )
|        sz -= frame_unit_size
|    }
|}
{:.syntax }

| --------------------------------------------------------- | ---------------- |
| frame_unit( sz ) {                                        | **Type**
|    while ( sz > 0 ) {
|        @@obu_length                                       | leb128()
|        sz -= Leb128Bytes
|        open_bitstream_unit( obu_length )
|        sz -= obu_length
|    }
|}
{:.syntax }


### Bitstream semantics
{:.no_count}

**fileSz** specifies the number of bytes in the entire bitstream and is provided by
external means.

**temporal_unit_size** specifies the length in bytes of the next temporal unit.

**frame_unit_size** specifies the length in bytes of the next frame unit.

**obu_length** specifies the length in bytes of the next OBU.

**Note:** It is legal for the OBU to set obu_has_size_field equal to 1 to indicate
that the obu_size syntax element is present.  In this case, the decoding process
assumes that obu_size and obu_length are set consistently.
If obu_size and obu_length are both present, but inconsistent, then the packed file
is deemed invalid.
{:.alert .alert-info }

The first OBU in the first frame_unit of each temporal_unit must be a temporal delimiter OBU (and this is the only place temporal delimiter OBUs can appear).

All the frame header and tile group OBUs required for decoding a single frame must be within the same frame_unit (and a frame_unit must not contain frame headers for more than one frame).

