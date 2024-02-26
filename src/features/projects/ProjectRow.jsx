import { useState } from 'react';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table';
import toLocalDateShort from '../../utils/toLocoalDateShort';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers';
import truncateText from '../../utils/truncatText';
import { HiOutlineTrash } from 'react-icons/hi';
import { TbPencilMinus } from 'react-icons/tb';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemoveProject';
function ProjectRow({ index, project }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProject, data } = useRemoveProject();
  console.log(data);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || '-'}</td>
      <td>
        {project.status === 'OPEN' ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              onClose={() => {
                setIsEditOpen(false);
              }}
              title="modal title"
              open={isEditOpen}
            >
              this is Modul...
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف ${project.title}`}
              open={isDeleteOpen}
            >
              <ConfirmDelete
                onClose={() => setIsDeleteOpen(false)}
                resourseName={project.title}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => {
                      setIsDeleteOpen(false);
                    },
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
