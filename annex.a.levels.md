## Annex A: Profiles and levels
{:.no_count}

### General

Profiles and levels specify restrictions on the capabilities needed to decode
the bitstreams.

The profile specifies the bit depth and subsampling formats supported, while the
level defines resolution and performance characteristics.

### Profiles

There are three named profiles:

  * "Main" compliant decoders must be able to decode streams with seq_profile
    equal to 0.

  * "High" compliant decoders must be able to decode streams with seq_profile
    less than or equal to 1.

  * "Professional" compliant decoders must be able to decode streams with
    seq_profile less than or equal to 2.

**Note:** The Main profile supports YUV 4:2:0 or monochrome bitstreams with bit
depth equal to 8 or 10. The High profile further adds support for 4:4:4
bitstreams with the same bit depth constraints. Finally, the Professional
profile extends support over the High profile to also bitstreams with bit depth
equal to 12, and also adds support for the 4:2:2 video format.
{:.alert .alert-info }

### Levels

Each operating point contains a syntax element seq_level_idx.

The following table defines the mapping from the syntax element (which takes
integer values) to the defined levels:

| Value of seq_level_idx | Level
| ---------------------- | --------------
| 0                      | 2.0
| 1                      | 2.1
| 2                      | 2.2
| 3                      | 2.3
| 4                      | 3.0
| 5                      | 3.1
| 6                      | 3.2
| 7                      | 3.3
| 8                      | 4.0
| 9                      | 4.1
| 10                     | 4.2
| 11                     | 4.3
| 12                     | 5.0
| 13                     | 5.1
| 14                     | 5.2
| 15                     | 5.3
| 16                     | 6.0
| 17                     | 6.1
| 18                     | 6.2
| 19                     | 6.3
| 20                     | 7.0
| 21                     | 7.1
| 22                     | 7.2
| 23                     | 7.3
| 24-30                  | Reserved
| 31                     | Maximum parameters
{:.table .table-sm .table-bordered }

**Note:** The level uses a X.Y format.
X is equal to 2 + (seq_level_idx \>\> 2).
Y is given by (seq_level_idx & 3).
{:.alert .alert-info }

The level defines variables as specified in the following tables:

| Level  | MaxPicSize | MaxHSize  | MaxVSize  | MaxDisplayRate | MaxDecodeRate
|        | (Samples)  | (Samples) | (Samples) | (Samples/sec)  | (Samples/sec)
| ------ | ---------- | --------- | --------- | -------------- | -------------
| 2.0    | 147456     | 2048      | 1152      | 4,423,680      | 5,529,600
| 2.1    | 278784     | 2816      | 1584      | 8,363,520      | 10,454,400
| 3.0    | 665856     | 4352      | 2448      | 19,975,680     | 24,969,600
| 3.1    | 1065024    | 5504      | 3096      | 31,950,720     | 39,938,400
| 4.0    | 2359296    | 6144      | 3456      | 70,778,880     | 77,856,768
| 4.1    | 2359296    | 6144      | 3456      | 141,557,760    | 155,713,536
| 5.0    | 8912896    | 8192      | 4352      | 267,386,880    | 273,715,200
| 5.1    | 8912896    | 8192      | 4352      | 534,773,760    | 547,430,400
| 5.2    | 8912896    | 8192      | 4352      | 1,069,547,520  | 1,094,860,800
| 5.3    | 8912896    | 8192      | 4352      | 1,069,547,520  | 1,176,502,272
| 6.0    | 35651584   | 16384     | 8704      | 1,069,547,520  | 1,176,502,272
| 6.1    | 35651584   | 16384     | 8704      | 2,139,095,040  | 2,189,721,600
| 6.2    | 35651584   | 16384     | 8704      | 4,278,190,080  | 4,379,443,200
| 6.3    | 35651584   | 16384     | 8704      | 4,278,190,080  | 4,706,009,088
{:.table .table-sm .table-bordered }

**Note:** The missing entries in these tables (for example level 2.2 and 7.0) represent
levels that are not yet defined.
{:.alert .alert-info }

| Level  | MaxHeaderRate | MainMbps    | HighMbps    | MainCR | HighCR | MaxTiles | MaxTileCols | Example
|        | (/sec)        | (MBits/sec) | (MBits/sec) |        |        |          |             |
| ------ | ------------- | ----------- | ----------- | ------ |------- | -------- | ----------- | -------
| 2.0    | 150           | 1.5         | -           | 2      | -      | 8        | 4           | 426x240@30fps
| 2.1    | 150           | 3.0         | -           | 2      | -      | 8        | 4           | 640x360@30fps
| 3.0    | 150           | 6.0         | -           | 2      | -      | 16       | 6           | 854x480@30fps
| 3.1    | 150           | 10.0        | -           | 2      | -      | 16       | 6           | 1280x720@30fps
| 4.0    | 300           | 12.0        | 30.0        | 4      | 4      | 32       | 8           | 1920x1080@30fps
| 4.1    | 300           | 20.0        | 50.0        | 4      | 4      | 32       | 8           | 1920x1080@60fps
| 5.0    | 300           | 30.0        | 100.0       | 6      | 4      | 64       | 8           | 3840x2160@30fps
| 5.1    | 300           | 40.0        | 160.0       | 8      | 4      | 64       | 8           | 3840x2160@60fps
| 5.2    | 300           | 60.0        | 240.0       | 8      | 4      | 64       | 8           | 3840x2160@120fps
| 5.3    | 300           | 60.0        | 240.0       | 8      | 4      | 64       | 8           | 3840x2160@120fps
| 6.0    | 300           | 60.0        | 240.0       | 8      | 4      | 128      | 16          | 7680x4320@30fps
| 6.1    | 300           | 100.0       | 480.0       | 8      | 4      | 128      | 16          | 7680x4320@60fps
| 6.2    | 300           | 160.0       | 800.0       | 8      | 4      | 128      | 16          | 7680x4320@120fps
| 6.3    | 300           | 160.0       | 800.0       | 8      | 4      | 128      | 16          | 7680x4320@120fps
{:.table .table-sm .table-bordered }

**Note:** Examples are given for non-scalable cases, but the constraints also
apply to each operating point of a scalable stream.  For example, consider a
60fps spatial scalable stream with a base layer at 960x540, and an enhancement
layer at 1920x1080. The operating point containing just the base layer may be
labelled as level 3.0, while the operating point containing both the base and
enhancement layer may be labelled as level 4.1.
{:.alert .alert-info }

**Note:** HighMbps and HighCR values are not defined for levels below level 4.0.
seq_tier equal to 1 can only be signaled for level 4.0 and above.
{:.alert .alert-info }

The bitstream constraints depend on the variables in the table, and additional
variables derived as follows:

  * TileWidth is defined as (MiColEnd - MiColStart) * MI_SIZE

  * TileHeight is defined as (MiRowEnd - MiRowStart) * MI_SIZE

  * RightMostTile is defined as MiColEnd == MiCols

  * CroppedTileWidth is defined as FrameWidth - MiColStart * MI_SIZE

  * CroppedTileHeight is defined as FrameHeight - MiRowStart * MI_SIZE

  * MaxTileSizeInLumaSamples is defined as the largest product of TileWidth *
    TileHeight for all tiles within the coded video sequence

  * showCount for a particular frame is defined as the number of times the frame
    is shown (either due to show_frame equal to 1, or via the
    show_existing_frame mechanism)

  * TotalDisplayLumaSampleRate is defined as the sum of the UpscaledWidth *
    FrameHeight * showCount of all frames that belong to the temporal unit that
    belongs to the operating point, divided by the time difference between the
    display time of the first frame of the current temporal unit and the display
    time of the first frame of the next temporal unit (if present). For the last
    temporal unit in the bitstream, the time difference from the previous
    temporal unit is used. In particular, for spatial and quality scalability,
    this limit applies to output pictures that belong to this particular layer.
    For temporal scalability, this restriction applies to the output pictures
    that belong to the indicated scalability layer and to the layers below.

  * TotalDecodedLumaSampleRate is defined as the sum of the UpscaledWidth *
    FrameHeight of all frames with show_existing_frame equal to 0 that belong
    to the temporal unit that belongs to the operating point, divided by the
    time difference between the decoding time of the first frame of the current
    temporal unit and the decoding time of the first frame of the next temporal
    unit (if present). For the last temporal unit in the bitstream, the time
    difference from the previous temporal unit is used.

  * NumFrameHeadersSec is defined as the number of OBU_FRAME and
    OBU_FRAME_HEADER OBUs received per second (this number does not include
    duplicate frame headers or frame headers with show_existing_frame equal to 1)

  * CompressedSize is defined for each frame as the total bytes in the OBUs
    related to this frame (OBU_FRAME, OBU_FRAME_HEADER, OBU_METADATA,
    OBU_TILE_GROUP), minus 128 (to allow for overhead of metadata and header data)

  * If seq_profile is equal to 0, PicSizeProfileFactor is set equal to 15,
    else if seq_profile is equal to 1, PicSizeProfileFactor is set equal to 30,
    otherwise PicSizeProfileFactor is set equal to 36

  * UnCompressedSize is defined for each frame as ( UpscaledWidth *
    FrameHeight * PicSizeProfileFactor ) >> 3

  * SpeedAdj is defined as TotalDecodedLumaSampleRate ÷ MaxDisplayRate

  * If seq_tier is equal to 0, MinCompBasis is set equal to MainCR, otherwise
    MinCompBasis is set equal to HighCR

  * If still_picture is equal to 0, MinPicCompressRatio is set equal to
    Max( 0.8, MinCompBasis * SpeedAdj ), otherwise MinPicCompressRatio is set
    equal to 0.8

  * CompressedRatio is defined as UnCompressedSize ÷ CompressedSize

**Note:** The ÷ operator represents standard mathematical division (in contrast
to the / operator which represents integer division).
{:.alert .alert-info }

If scalability_mode_idc is not present or equal to a reserved value, then
TemporalParallelNum and TemporalParallelDen are defined to be equal to 1.

Otherwise, if scalability_mode_idc is not equal to SCALABILITY_SS,
TemporalParallelDen is defined as 1 and TemporalParallelNum is defined as
(1 \<\< ( TemporalLayers - 1 )) where TemporalLayers is the number of temporal
layers as defined in the semantics for scalability_mode_idc.

Otherwise (scalability_mode_idc is equal to SCALABILITY_SS),
TemporalParallelNum and TemporalParallelDen are defined as follows:

~~~~~ c
NumIndependent = 0
for ( i = 0; i < temporal_group_size; i++ ) {
  if ( temporal_group_temporal_id[ i ] ) {
    independent = 1
    for ( j = 0; j < temporal_group_ref_cnt[ i ]; j++ ) {
      ref = (i - temporal_group_ref_pic_diff[ i ][ j ] + temporal_group_size) % temporal_group_size
      if ( temporal_group_temporal_id[ ref ] == temporal_group_temporal_id[ i ] )
        independent = 0
    }
    NumIndependent += independent
  }
}
TemporalParallelNum = temporal_group_size
TemporalParallelDen = temporal_group_size - NumIndependent
~~~~~

When the mapped level is contained in the tables above,
it is a requirement of bitstream conformance that the following constraints hold:

  * UpscaledWidth * FrameHeight is less than or equal to MaxPicSize

  * UpscaledWidth is less than or equal to MaxHSize

  * FrameHeight is less than or equal to MaxVSize

  * TotalDisplayLumaSampleRate is less than or equal to MaxDisplayRate

  * TotalDecodedLumaSampleRate is less than or equal to MaxDecodeRate

  * NumFrameHeadersSec is less than or equal to MaxHeaderRate

  * The number of tiles per second is less than or equal to MaxTiles * 120

  * NumTiles is less than or equal to MaxTiles

  * TileCols is less than or equal to MaxTileCols

  * CompressedRatio is greater than or equal to MinPicCompressRatio

  * ( TileWidth * SuperresDenom / SUPERRES_NUM ) is less than or equal to
    MAX_TILE_WIDTH for each tile

  * For each tile, if use_superres is equal to 0 and RightMostTile is equal to
    0, then TileWidth is greater than or equal to 64

  * For each tile, if use_superres is equal to 1 and RightMostTile is equal to
    0, then TileWidth is greater than or equal to 128

  * TileWidth * TileHeight is less than or equal to 4096 * 2304 for each tile

  * FrameWidth is greater than or equal to 16

  * FrameHeight is greater than or equal to 16

  * CroppedTileWidth is greater than or equal to 8 for each tile

  * CroppedTileHeight is greater than or equal to 8 for each tile

  * MaxTileSizeInLumaSamples * NumFrameHeadersSec *
    TemporalParallelDen/TemporalParallelNum is less than or equal to 588,251,136
    (where this number is the decode luma sample rate of 4096x2176 * 60fps *
    1.1)

  **Note:** The purpose of this constraint is to ensure that for decode luma
  sample rates above 4K60 there is sufficient parallelism for decoder
  implementations. Parallelism can be chosen by the encoder as either tile
  level parallelism or temporal layer parallelism or a combination provided the
  above constraint holds. The constraint has no effect on levels 5.1 and below.
  {:.alert .alert-info }

If seq_level_idx is equal to 31 (indicating the maximum parameters level), then
there are no level-based constraints on the bitstream.

**Note:** The maximum parameters level should only be set for bitstreams that do
not conform to any other level. Typically this would be used for large
resolution still images.
{:.alert .alert-info }

The buffer model is used to define additional conformance requirements.

These requirements depend on the following level, tier, and profile dependent
variables:

  * If seq_tier is equal to 0, MaxBitrate is equal to MainMbps multiplied by
    1,000,000

  * Otherwise (seq_tier is equal to 1), MaxBitrate is equal to HighMbps
    multiplied by 1,000,000

  * MaxBufferSize is equal to MaxBitrate multiplied by 1 second

  * If seq_profile is equal to 0, BitrateProfileFactor is equal to 1.0

  * If seq_profile is equal to 1, BitrateProfileFactor is equal to 2.0

  * If seq_profile is equal to 2, BitrateProfileFactor is equal to 3.0

### Decoder Conformance

A level X.Y compliant decoder must be able to decode all bitstreams (that can be
decoded by the general decoding process) that conform to that level.

When doing that, the decoder must be able to display output frames according to
the display schedule if such is indicated by the bitstream.

**Note:** If the level of a bitstream is equal to 31 (indicating the maximum
parameters level), the decoder should examine the properties of the bitstream
and decide whether to decode it or not. There is no assurance that all pictures
will be decoded. A decoder would typically decode pictures up to a certain
maximum uncompressed picture size (or maximum compressed picture size or maximum
width or maximum tile size) that the decoder maker considers sufficiently
extreme for their use case, and not decode anything bigger than that.
{:.alert .alert-info }

A level X.Y compliant decoder should be able to decode tile list OBUs (via the
large scale tile decoding process) at a rate of 180 tile list OBUs per second
subject to the following level-dependent constraints:

  * UpscaledWidth * FrameHeight is less than or equal to MaxPicSize

  * UpscaledWidth is less than or equal to MaxHSize

  * FrameHeight is less than or equal to MaxVSize

  * TileWidth * TileHeight * ( tile_count_minus_1 + 1 ) * 180 is less than or
    equal to ( MaxDecodeRate / 2 )

  * For each tile list OBU, BytesPerTileList * 8 * 180 is less than or equal to
    MaxBitrate

Where BytesPerTileList is defined as the sum of (coded_tile_data_size_minus_1 +
1) for each tile list entry in the tile list OBU.
