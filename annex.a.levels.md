## Annex A: Levels
{:.no_count}


### Overview
{:.no_toc .no_count}

Levels specify restrictions on the capabilities needed to decode the bitstreams.

There is only a single level currently defined in this Specification. The level
is called level 1.

Level 1 limits the bitstream to a worst case of roughly a 1080P 60fps 20Mbps
stream by the following restrictions:

  * Width must be less than or equal to 1920.

  * Height must be less than or equal to 1080.

  * The number of frames per second must be less than or equal to 60 (this
    includes both output frames and frames that are not output).

  * The size in bits for an intra frame must be less than or equal
    to 100,000,000 / 60.

  * The size in bits for an inter frame must be less than or equal
    to 50,000,000 / 60.

  * The number of times the function read_bool is called for an intra frame
    must be less than or equal to 2 * 100,000,000 / 60.

  * The number of times the function read_bool is called for an inter frame must
    be less than or equal to 2 * 50,000,000 / 60.
