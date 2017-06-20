## Annex B: Superframes
{:.no_count}


### Overview
{:.no_count}

AV1 supports consolidating multiple coded frames into one single chunk, called
a "superframe".

The superframe index is stored in the last up to 34 bytes of a chunk. The
enclosed frames can be located by parsing this superframe index.

The syntax of the superframe is shown in section B.2, and the meaning of the
syntax elements is described in section B.3. The method for parsing a
superframe is described in section B.4.


### Superframe syntax
{:.no_count}

<div class="syntax">
superframe( sz ) {                                                    <b>Type</b>
    for( i = 0; i < NumFrames; i++ )
        frame( frame_sizes[ i ] )
    superframe_index( sz )
}

</div>


#### Superframe index
{:.no_count}

<div class="syntax">
superframe_index( sz ) {                                              <b>Type</b>
    frameSizeSum = 0
    superframe_header( )
    for( i = 0; i < NumFrames - 1; i++ ) {
        <b>frame_sizes</b>[ i ]                                              f(SzBytes)
        frameSizeSum += frame_size[ i ]
    }
    frame_size[ i ] = sz – SzIndex - frameSizeSum
    superframe_header( )
}

</div>


#### Superframe header syntax
{:.no_count}

<div class="syntax">
superframe_header( ) {                                                <b>Type</b>
    <b>superframe_marker</b>                                                 f(3)
    <b>bytes_per_framesize_minus_1</b>                                       f(2)
    <b>frames_in_superframe_minus_1</b>                                      f(3)
}

</div>


### Superframe semantics
{:.no_count}

**sz** specifies the number of bytes in the superframe and is provided by
external means.

**frame_sizes**[ i ] specifies the size in bytes of frame number i (zero
indexed) within this superframe.

**superframe_marker** is equal to 0b110. This is a fixed bit string which
allows decoders to determine whether a superframe is present.

**bytes_per_framesize_minus_1** indicates the number of bytes needed to code
each frame size.

The variable SzBytes is derived as follows:

~~~~~ c
SzBytes = bytes_per_framesize_minus_1 + 1
~~~~~

**frames_in_superframe_minus_1** indicates the number of frames within this
superframe.

The variable NumFrames is derived as follows:

~~~~~ c
NumFrames = frames_in_superframe_minus_1 + 1
~~~~~

**Note:** It is legal for a superframe to contain just a single frame and have
NumFrames equal to 1.


### Superframe parsing
{:.no_count}

The use of superframes is optional, and a chunk can contain either a single
frame, or a superframe.

The decoder determines the presence of a superframe by:

  1. parsing the final byte of the chunk and checking that the superframe_marker
     equals 0b110,

  2. setting the total size of the superframe_index SzIndex equal
     to 2 + (NumFrames – 1) * SzBytes,

  3. checking that the first byte of the superframe_index matches the final
     byte.

If the checks in steps 1 and 3 both pass, then the chunk is determined to
contain a superframe and each frame in the superframe is passed to the decoding
process in turn.

Otherwise, the chunk is determined to not contain a superframe, and the whole
chunk is passed to the decoding process.

**Note:** This parsing process works because it is a requirement of bitstream
conformance that the final byte of a coded frame must not contain a
superframe_marker.
