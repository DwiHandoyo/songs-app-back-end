const mapDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt: created_at,
  updatedAt: updated_at,
});

const modelToResponse =(song) => ({
  id: song.id,
  title: song.title,
  performer: song.performer,
})

module.exports = { mapDBToModel, modelToResponse };
