export interface ChessPieceItem {
  value: string
  id: string
  side: string
  dead: boolean
  position: string
  icon: string
  hasMoved?: boolean
}

export interface ChessPiecesBlack {
    pawn1_b: ChessPieceItem
    pawn2_b: ChessPieceItem
    pawn3_b: ChessPieceItem
    pawn4_b: ChessPieceItem
    pawn5_b: ChessPieceItem
    pawn6_b: ChessPieceItem
    pawn7_b: ChessPieceItem
    pawn8_b: ChessPieceItem
    rook1_b: ChessPieceItem
    rook2_b: ChessPieceItem
    knight1_b: ChessPieceItem
    knight2_b: ChessPieceItem
    bishop1_b: ChessPieceItem
    bishop2_b: ChessPieceItem
    king_b: ChessPieceItem
    queen_b: ChessPieceItem
}

export interface ChessPiecesWhite {
    pawn1_w: ChessPieceItem
    pawn2_w: ChessPieceItem
    pawn3_w: ChessPieceItem
    pawn4_w: ChessPieceItem
    pawn5_w: ChessPieceItem
    pawn6_w: ChessPieceItem
    pawn7_w: ChessPieceItem
    pawn8_w: ChessPieceItem
    rook1_w: ChessPieceItem
    rook2_w: ChessPieceItem
    knight1_w: ChessPieceItem
    knight2_w: ChessPieceItem
    bishop1_w: ChessPieceItem
    bishop2_w: ChessPieceItem
    king_w: ChessPieceItem
    queen_w: ChessPieceItem
}

