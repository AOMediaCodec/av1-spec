## Annex A: Profiles and levels
{:.no_count}


### General
{:.no_toc .no_count}

Profiles and levels specify restrictions on the capabilities needed to decode the bitstreams.

The profile specifies the bit depth and subsampling formats supported, while the level defines
resolution and performance characteristics.

### Profiles

There are three named profiles:

  * "Main" compliant decoders must be able to decode streams with seq_profile equal to 0.
  * "High" compliant decoders must be able to decode streams with seq_profile less than or equal to 1.
  * "Professional" compliant decoders must be able to decode streams with seq_profile less than or equal to 2.
  
**Note:** Main profile consists of YUV 4:2:0 or monochrome sequences with bit depth equal to 8 or 10.
High profile consists of all main profile sequences plus YUV 4:4:4 sequences with bit depth equal to 8 or 10 (monochrome is not allowed when seq_profile=1).
Professional profile consists of all high and main profile sequences plus YUV 4:2:2 sequences with bit depth equal to 8 or 10 or 12,
4:2:0 sequences with bit depth equal to 12,
4:4:4 sequences with bit depth equal to 12, and monochrome sequences with bit depth equal to 12.
{:.alert .alert-info }

### Levels

Each operating point contains a syntax element level.

The following table defines the mapping from the syntax element (which takes integer values) to the defined levels (which use a X.Y format):

| Value of level | Mapped level
| -------------- | --------------
| 0              | 2.0
| 1              | 2.1
| 2              | 2.2
| 3              | 2.3
| 4              | 3.0
| 5              | 3.1
| 6              | 3.2
| 7              | 3.3
| 8              | 4.0
| 9              | 4.1
| 10             | 4.2
| 11             | 4.3
| 12             | 5.0
| 13             | 5.1
| 14             | 5.2
| 15             | 5.3
| 16             | 6.0
| 17             | 6.1
| 18             | 6.2
| 19             | 6.3
| 20             | 7.0
| 21             | 7.1
| 22             | 7.2
| 23             | 7.3
| 24-30          | Reserved
| 31             | Maximum parameters
{:.table .table-sm .table-bordered }

TODO there is currently no syntax element that specifies if the level is high or not.

TODO there are 32 levels but the level syntax element is only 4 bits long.

The level defines constraints on the bitstream as specified in the following tables:

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

| Level  | MaxHdrRate | MainMbps    | HighMbps    | MinCompBasis | MaxTiles | MaxTileCols | Example
|        | (/sec)     | (MBits/sec) | (MBits/sec) |              |          |             | 
| ------ | ---------- | ----------- | ----------- | ------------ | -------- | ----------- | -------
| 2.0    | 150        | 1.5         | -           | 2            | 8        | 4           | 426x240@30fps
| 2.1    | 150        | 3.0         | -           | 2            | 8        | 4           | 640x360@30fps
| 3.0    | 150        | 6.0         | -           | 2            | 16       | 6           | 854x480@30fps
| 3.1    | 150        | 10.0        | -           | 2            | 16       | 6           | 1280x720@30fps
| 4.0    | 300        | 12.0        | 30.0        | 4            | 32       | 8           | 1920x1080@30fps
| 4.1    | 300        | 20.0        | 50.0        | 4            | 32       | 8           | 1920x1080@60fps
| 5.0    | 300        | 27.0        | 100.0       | 6            | 64       | 8           | 3840x2160@30fps
| 5.1    | 300        | 42.0        | 160.0       | 8            | 64       | 8           | 3840x2160@60fps
| 5.2    | 300        | 60.0        | 240.0       | 8            | 64       | 8           | 3840x2160@120fps
| 5.3    | 300        | 60.0        | 240.0       | 8            | 64       | 8           | 3840x2160@120fps
| 6.0    | 300        | 60.0        | 240.0       | 8            | 128      | 16          | 7680x4320@30fps
| 6.1    | 300        | 100.0       | 480.0       | 8            | 128      | 16          | 7680x4320@60fps
| 6.2    | 300        | 160.0       | 800.0       | 8            | 128      | 16          | 7680x4320@120fps
| 6.3    | 300        | 160.0       | 800.0       | 8            | 128      | 16          | 7680x4320@120fps
{:.table .table-sm .table-bordered }

**Note:** Examples are given for non-scalable cases, but the constraints also apply to scalable
streams.  For example, a 60fps spatial scalable stream with a base layer at 960x540, and an
enhancement layer at 1920x1080 should be labelled as level 4.1 (assuming the other constraints, such as bitrate, are met).
{:.alert .alert-info }

When the mapped level is contained in these tables,
it is a requirement of bitstream conformance that the following constraints hold:

  * UpscaledWidth * FrameHeight is less than or equal to MaxPicSize
  
  * UpscaledWidth is less than or equal to MaxHSize
  
  * FrameHeight is less than or equal to MaxVSize
  
  * TotalDisplayLumaSampleRate (defined below) is less than or equal to MaxDisplayRate
  
  * TotalDecodedLumaSampleRate (defined below) is less than or equal to MaxDecodeRate
  
  * NumFrameHeadersSec (defined below) is less than or equal to MaxHdrRate 
  
  * The number of tiles per second is less than or equal to MaxTiles * 120
  
  * NumTiles is less than or equal to MaxTiles
  
  * TileCols is less than or equal to MaxTileCols
  
  * CompressedRatio (defined below) is greater than or equal to MinPicCompressRatio (defined below)
  
  * TileWidth (defined below) is less than or equal to 4096 for each tile
  
  * TileWidth * TileHeight is less than or equal to 4096 * 2304 for each tile
  
  * FrameWidth is greater than or equal to 16
  
  * FrameHeight is greater than or equal to 16
  
  * CroppedTileWidth (defined below) is greater than or equal to 8 for each tile
  
  * CroppedTileHeight (defined below) is greater than or equal to 8 for each tile
  
  * MaxTileSizeInLumaSamples * NumFrameHeadersSec * TemporalParallelDen)/TemporalParallelNum (defined below) is less than or equal to 588,251,136 (where this number is the decode pixel rate of 4096x2176 * 60fps * 1.1))
  
  **Note:** The purpose of this constraint is to ensure that for decode pixel rates above 4K60 there is sufficient parallelism for decoder implementations. Parallelism can be chosen by the encoder as either tile level parallelism or temporal layer parallelism or a combination provided the above constraint holds. The constraint has no effect on levels 5.1 and below.
  {:.alert .alert-info }
  
These constraints make use of the following variables:

  * TileWidth is defined as (MiColEnd - MiColStart) * MI_SIZE
  
  * TileHeight is defined as (MiRowEnd - MiRowStart) * MI_SIZE
  
  * CroppedTileWidth is defined as FrameWidth - MiColStart * MI_SIZE
  
  * CroppedTileHeight is defined as FrameHeight - MiRowStart * MI_SIZE
  
  * MaxTileSizeInLumaSamples is defined as the largest product of TileWidth * TileHeight for all tiles within the coded video sequence
  
  * TotalDisplayLumaSampleRate is defined as the luma sample rate (i.e. based on width * height of the output luma plane) for all output frames with the flag show_frame equal to 1 and frames referenced in frame headers with show_existing_frame = 1 for the scalability layer that conforms to the level indicated for this layer. In particular, for spatial and quality scalability, this limit applies to output pictures that belong to this particular layer. For temporal scalability, this restriction applies to the output pictures that belong to the indicated scalability layer and to the layers below.
  
  * TotalDecodedLumaSampleRate is defined as the sum of the UpscaledWidth * FrameHeight of all frames that belong to the temporal unit that belongs to the operating point, divided by the time difference between the decoding time of the first frame of the current temporal unit and the decoding time of the first frame of the next temporal unit (if present). For the last temporal unit in the bitstream, the time difference from the previous temporal unit is used.

  * NumFrameHeadersSec is defined as the number of OBU_FRAME and OBU_FRAME_HEADER OBUs received per second (this number does not include duplicate frame headers or frame headers with show_existing_frame equal to 1)
  
  * CompressedSize is defined for each frame as the total bytes in the OBUs related to this frame (OBU_FRAME, OBU_FRAME_HEADER, OBU_METADATA, OBU_TILE_GROUP), minus 128 (to allow for overhead of metadata and header data)
  
  * If mono_chrome is equal to 1, ChromaOverhead is set equal to 1, otherwise ChromaOverhead is set equal to (1+2/((1+subsampling_x)*(1+subsampling_y))) (Note this can be a fraction)
  
  * UnCompressedSize is defined as MaxPicSize * BitDepth * ChromaOverhead / 8
  
  * SpeedAdj is defined as TotalDecodedLumaSampleRate / MaxDisplayRate
  
  * MinPicCompressRatio defined as Max( 0.8, MinCompBasis * SpeedAdj * !still_picture_flag )
  
  * CompressedRatio is defined as UnCompressedSize / CompressedSize
  
If scalability_mode_idc is not present or equal to a reserved value, then TemporalParallelNum and TemporalParallelDen are defined to be equal to 1.

Otherwise, if scalability_mode_idc is not equal to SCALABILITY_SS, TemporalParallelDen is defined as 1 and TemporalParallelNum is defined as (1 \<\< ( TemporalLayers - 1 )) where TemporalLayers is the number of temporal layers as defined in the semantics for scalability_mode_idc.

Otherwise (scalability_mode_idc is equal to SCALABILITY_SS), TemporalParallelNum and TemporalParallelDen are defined as follows:

~~~~~ c
NumIndependent = 0
for ( i = 0; i < temporal_group_size; i++ ) {
  if ( temporal_group_temporal_id[ i ] ) {
    independent = 1
    for ( j = 0; j < temporal_group_ref_cnt[ i ]; j++ ) {
      ref = (i - temporal_group_ref_pic_diff[ i ][ j ] + temporal_group_size) % temporal_group_size
      if (temporal_group_temporal_id[ ref ] == temporal_group_temporal_id[ i ])
        independent = 0
    }
    NumIndependent += independent
  }
}
TemporalParallelNum = temporal_group_size
TemporalParallelDen = temporal_group_size - NumIndependent
~~~~~

If level is equal to 31 (indicating the maximum parameters level), then there are no level-based constraints on the bitstream.
  
**Note:** The maximum parameters level should only be set for bitstreams that do not conform to any other level.
Typically this would be used for large resolution still images. 
{:.alert .alert-info }
  

The buffer model is used to define additional conformance requirements.

These requirements depend on the following level and profile dependent variables:

  * If high_tier is equal to 0, MaxBitrate is equal to MainMbps multiplied by 1,000,000
  
  * Otherwise (high_tier is equal to 1), MaxBitrate is equal to HighMbps multiplied by 1,000,000
  
  * MaxBufferSize is equal to MaxBitrate multiplied by 1 second
  
  * BufferPoolMaxSize is equal to 10
  
  * If seq_profile is equal to 0, BitrateProfileFactor is equal to 1.0
  
  * If seq_profile is equal to 1, BitrateProfileFactor is equal to 2.0
  
  * If seq_profile is equal to 2, BitrateProfileFactor is equal to 3.0
  
The additional requirements in the buffer model are:

  * BitRate[ op ] shall be less than or equal to the MaxBitRate * BitrateProfileFactor
    defined in the level constraints for the level associated with operating point op.
    
  * BufferSize[ op ] shall be less or equal the MaxBufferSize * BitrateProfileFactor
    defined in the level constraints for the level associated with operating point op.

### Decoder Conformance

A level X.Y compliant decoder must be able to decode all bitstreams that conform to that level.

**Note:** If the level of a bitstream is equal to 31 (indicating the maximum parameters level),
the decoder should examine the properties of the bitstream and decide whether to decode it or not.
There is no assurance that all pictures will be decoded.
A decoder would typically decode pictures up to a certain maximum uncompressed picture size
(or maximum compressed picture size or maximum width or maximum tile size)
that the decoder maker considers sufficiently extreme for their use case,
and not decode anything bigger than that. 
{:.alert .alert-info }
