export default function ProfilePage() {
  return (
    <div className="container rounded bg- mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://logos-world.net/wp-content/uploads/2020/04/Toyota-Symbol.png"
              alt="иди работай"
            />
            <span className="font-weight-bold">Антон</span>tyavin02@mail.ru
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Профиль</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Имя</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Введите имя"
                  defaultValue=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Фамилия</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  placeholder="Введите фамилию"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Номер телефона</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Введите номер телефона"
                  defaultValue=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Населённый пункт</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Где вы живёте ? "
                  defaultValue=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Улица</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Введите адрес"
                  defaultValue=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Индекс</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Введите индекс"
                  defaultValue=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Почта</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Введите почту"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Страна</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Страна"
                  defaultValue=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Регион/Область</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  placeholder="Регион/область"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
