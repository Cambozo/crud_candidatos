import db from '../config/db.js'


// vamos criar um usuario
export function Createcandidato(req,res){
    const{nome,descricao}= req.body;
    const sql="INSERT INTO candidato(nome,descricao)values(?,?)";
    db.query(sql,[nome,descricao],(err,resul)=>{
        if(err) return res.status(500).json(err);
        res.status(201).json({message:'candidato criado com sucesso'});
    });
}
// vamos buscar todos os canditados
 export function buscarCanditado(req, res)
 {
    const sql="SELECT * FROM candidato";
    db.query(sql,(err, rows)=>{
        if(err) return res.status(500).json(err);
        res.status(200).json(rows);
    });
 }
 // vamos atualizar um dado
 export function ActualizarCandidato(req,res)
 {
    const {id}= req.params;
    //preciso saber o atualizar de onde estados virão
    const {nome,descricao}= req.body;
    const sql="UPDATE candidato SET nome=?,descricao=? where id=?"
    db.query(sql,[nome,descricao,id],(err, resul)=>{
        if(err) return res.status(500).json(err);
        res.status(201).json({message:'atualizado com sucesso'});
    });
 }
 export function EliminarCandidato(req,res)
 {
    const {id}= req.params;
    const sql="DELETE FROM candidato WHERE id=?";
    db.query(sql,[id],(err,resul)=>{
        if(err) return res.status(500).json(err);
        res.status(200).json({message:'candidato eliminado com sucesso'});
    });
 }