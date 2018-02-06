## Annex A: Profiles and Levels
{:.no_count}


### Overview
{:.no_toc .no_count}

Profiles and levels specify restrictions on the capabilities needed to decode the bitstreams.

The profile specifies the bit depth and subsampling formats supported, while the level defines
resolution and performance characteristics.

#### Profiles

There are three named profiles:

  * "Main" compliant decoders must be able to decode streams with Profile equal to 0.
  * "High" compliant decoders must be able to decode streams with Profile less than or equal to 1.
  * "Professional" compliant decoders must be able to decode streams with Profile less than or equal to 2.
  
**Note:** Main profile consists of YUV 4:2:0 or monochrome sequences with bit depth equal to 8 or 10.
High profile consists of YUV 4:4:4 sequences with bit depth equal to 8 or 10.
Professional profile consists of YUV 4:2:2 sequences with bit depth equal to 8 or 10 or 12,
4:2:0 sequences with bit depth equal to 12,
and 4:4:4 sequences with bit depth equal to 12.
{:.alert .alert-info }

#### Levels

TODO: Still under discussion.

