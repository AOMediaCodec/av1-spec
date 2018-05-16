## Annex B: Length delimited bitstream format
{:.no_count}

### Overview
{:.no_count}

[Section 5][] defines the syntax for OBUs.
[Section 5.2][] defines the low-overhead bitstream format.
This annex defines a length-delimited format for packing OBUs into a format that
enables skipping through temporal units and frames more easily.

### Length delimited bitstream syntax
{:.no_count}

| --------------------------------------------------------- | ---------------- |
| bitstream( ) {                                            | **Type**
|    while ( more_data_in_bitstream() ) {
|        @@temporal_unit_size                               | leb128()
|        temporal_unit( temporal_unit_size )
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


### Length delimited bitstream semantics
{:.no_count}

**more_data_in_bitstream()** is a system-dependent method of determining whether
the end of the bitstream has been reached.  It returns 1 when there is more data
to be read, or 0 when the end of the bitstream has been reached.

**temporal_unit_size** specifies the length in bytes of the next temporal unit.

**frame_unit_size** specifies the length in bytes of the next frame unit.

**obu_length** specifies the length in bytes of the next OBU.

**Note:** It is allowed for the OBU to set obu_has_size_field equal to 1 to indicate
that the obu_size syntax element is present.  In this case, the decoding process
assumes that obu_size and obu_length are set consistently.
If obu_size and obu_length are both present, but inconsistent, then the packed bitstream
is deemed invalid.
{:.alert .alert-info }

The first OBU in the first frame_unit of each temporal_unit must be a temporal delimiter OBU (and this is the only place temporal delimiter OBUs can appear).

All the frame header and tile group OBUs required for decoding a single frame must be within the same frame_unit (and a frame_unit must not contain frame headers for more than one frame).

